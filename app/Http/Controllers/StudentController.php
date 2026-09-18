<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Response;
use Storage;
use Validator;

class StudentController extends Controller
{
    public function index()
    {
        return inertia('dashboard');
    }

    public function show(Student $student)
    {
        if ($student->photo) {
            $student = array_merge(
                $student->toArray(),
                ['photo_url' => Storage::disk('public')->url($student->photo)]
            );
        }
        return inertia('student', ['student' => $student]);
    }

    public function create()
    {
        return inertia('student');
    }

    public function showPhoto(Student $student)
    {
        return inertia('student.photo', ['student' => $student]);
    }

    public function datatables(Request $request)
    {
        $param = $request->only(['draw', 'start', 'length', 'search', 'order', 'columns']);

        $query = Student::query();

        $columns = collect($param['columns'] ?? [])
            ->map(fn($column) => $column['data'] ?? $column['name'] ?? null)
            ->filter(fn($column) => is_string($column) && preg_match('/^[A-Za-z0-9_]+$/', $column))
            ->values();

        $total = (clone $query)->count();

        if (!empty($param['search']['value'])) {
            $search = $param['search']['value'];
            $query->where(function ($builder) use ($columns, $search) {
                foreach ($columns as $column) {
                    $builder->orWhere($column, 'like', "%{$search}%");
                }
            });
        }

        $filtered = (clone $query)->count();

        if (isset($param['order'][0])) {
            $order = $param['order'][0];
            $column = $columns->get((int) ($order['column'] ?? 0));
            $direction = ($order['dir'] ?? 'asc') === 'desc' ? 'desc' : 'asc';

            if ($column) {
                $query->orderBy($column, $direction);
            }
        }

        $length = (int) ($param['length'] ?? 10);
        $start = max((int) ($param['start'] ?? 0), 0);

        if ($length !== -1) {
            $query->skip($start)->take(max($length, 1));
        }

        return Response::json([
            'draw' => (int) ($param['draw'] ?? 0),
            'recordsTotal' => $total,
            'recordsFiltered' => $filtered,
            'data' => $query->get()->map(function ($student) {
                if (!$student->photo) return $student;
                return array_merge(
                    $student->toArray(),
                    ['photo_url' => Storage::disk('public')->url($student->photo)]
                );
            }),
        ]);
    }


    public function store(Request $request)
    {
        $id = $request->input('id');
        $validator = $this->validator($request, $id);
        if ($validator->fails()) return back()->withErrors($validator);


        $student = null;
        if ($id) {
            $student = Student::findOrFail($id);
            $student->update($validator->validated());
        } else {
            $student = Student::create($validator->validated());
        }

        return Response::redirectTo(route('students.index', $student))
            ->with(['message" => "Berhasil disimpan.']);
    }

    public function storePhoto(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => 'required|integer',
            'file' => 'required|file|mimes:jpg,jpeg,png|max:100',
        ]);
        if ($validator->fails()) return back()->withErrors($validator);
        $body = $validator->validated();
        $student = Student::findOrFail($body['id']);

        $disk = Storage::disk('public');
        if ($student->photo && $disk->exists($student->photo)) $disk->delete($student->photo);
        $next = $request->file('file')->store('photos', 'public');
        $student->photo = $next;
        $student->save();
        return Response::redirectTo(route('students.show', $student))
            ->with(['message" => "Foto berhasil diubah.']);
    }

    public function destroy(Student $student) {}

    protected function validator(Request $request, ?int $id = null)
    {
        return Validator::make($request->all(), [
            'name' => 'required',
            'email' => ['required', 'email', Rule::unique('students', 'email')->ignore($id)],
            'number' => ['required', 'integer', Rule::unique('students', 'number')->ignore($id)],
            'institution' => 'required',
        ]);
    }
}
