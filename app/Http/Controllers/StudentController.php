<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Models\Student;
use Auth;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    public function index()
    {
        if (!Auth::check()) return route('root');
        return inertia('dashboard');
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

        return response()->json([
            'draw' => (int) ($param['draw'] ?? 0),
            'recordsTotal' => $total,
            'recordsFiltered' => $filtered,
            'data' => $query->get(),
        ]);
    }

    public function create() {}

    public function store(StoreStudentRequest $request) {}

    public function show(Student $student) {}

    public function edit(Student $student) {}

    public function update(UpdateStudentRequest $request, Student $student) {}

    public function destroy(Student $student) {}
}
