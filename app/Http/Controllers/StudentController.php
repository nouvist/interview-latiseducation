<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Student;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Response;
use Validator;

class StudentController extends Controller
{
    public function index()
    {
        return inertia('dashboard');
    }

    public function show(Student $student)
    {
        return inertia('student', array_merge(
            ["student" => $student],
            ["message" => session('message')]
        ));
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
            'data' => $query->get(),
        ]);
    }

    public function create() {}

    public function store(Request $request)
    {
        $id = $request->input("id");
        $validator = $this->validator($request, $id);
        if ($validator->fails()) {
            return back()->withErrors($validator);
        }

        $student = null;
        if ($id) {
            $student = Student::findOrFail($id);
            $student->update($validator->validated());
        } else {
            $student = Student::create($validator->validated());
        }

        return Response::redirectTo(route("students.show", $student))
            ->with(["message" => "Berhasil disimpan."]);
    }

    public function edit(Student $student) {}

    public function update(UpdateStudentRequest $request, Student $student) {}

    public function destroy(Student $student) {}


    protected function validator(Request $request, ?int $id = null)
    {
        return Validator::make($request->all(), [
            "name" => "required",
            "email" => ["required", "email", Rule::unique('students', 'email')->ignore($id)],
            "number" => ["required", "integer", Rule::unique('students', 'number')->ignore($id)],
            "institution" => "required",
        ]);
    }
}
