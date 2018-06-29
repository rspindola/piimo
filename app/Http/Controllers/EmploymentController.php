<?php

namespace App\Http\Controllers;

use App\Models\Employment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Validator;
use Response;
use App\Http\Requests\EmploymentFormRequest;

class EmploymentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.employment.index')->with('curriculos', Employment::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(EmploymentFormRequest $request)
    {
            $filename = $request->file('attachment')->store('anexos');
            Employment::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'cel' => $request->cel,
                'linkedin' => $request->linkedin,
                'attachment' => $filename,
            ]);
            alert()->success('Em breve entraremos em contato.', 'Obrigado')->persistent('Ok');
            return redirect()->route('piimo.trabalho');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Employment  $employment
     * @return \Illuminate\Http\Response
     */
    public function show(Employment $employment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Employment  $employment
     * @return \Illuminate\Http\Response
     */
    public function edit(Employment $employment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Employment  $employment
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Employment $employment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Employment  $employment
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employment $employment)
    {
        //
    }
}
