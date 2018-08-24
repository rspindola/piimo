<?php

namespace App\Http\Controllers;

use App\Models\Employment;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Validator;
use Response;
use App\Http\Requests\EmploymentFormRequest;
use App\Mail\LeadEmail;
use Mail;

class EmploymentController extends Controller
{
    public function _contruct(){
        setlocale(LC_ALL, 'pt_BR', 'pt_BR.utf-8', 'pt_BR.utf-8', 'portuguese');
    }

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
        $file=$request->file('attachment');
        $filename = $file->getClientOriginalName();
	    $file->move(public_path('/docs/cv'),$filename);

            $dados = Employment::create([
                'name' => $request->name,
                'email' => $request->email,
                'phone' => $request->phone,
                'cel' => $request->cel,
                'linkedin' => $request->linkedin,
                'attachment' => $filename,
            ]);
            Mail::to('rafael@piimo.com.br')->send(new LeadEmail($dados));
            return redirect()->route('obrigado2');
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
    public function destroy($id)
    {
        $employment = Employment::findOrFail($id);
        $employment->delete();
        return response()->json($employment);
    }
}
