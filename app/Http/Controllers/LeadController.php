<?php

namespace App\Http\Controllers;

use App\Models\Lead;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Validator;
use Response;

class LeadController extends Controller
{

    protected $rules_venda = [
        'name' => 'required',
        'email' => 'required|email',
        'phone' => 'required|min:14|max:15',
        'message' => 'required',
        'city' => 'required',
        'neighborhood' => 'required',
        'utm_source' => 'required',
        'utm_medium' => 'required',
        'utm_campaign' => 'required',
    ];

    protected $rules_obra = [
        'name' => 'required',
        'phone' => 'required|min:14|max:15',
        'utm_source' => 'required',
        'utm_medium' => 'required',
        'utm_campaign' => 'required',
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('admin.leads.index')->with('leads', Lead::all());
    }

    public function leadobra()
    {
        return view('admin.leads.index')
            ->with('titulo', 'Obra')
            ->with('leads', Lead::where('area','Obra')->get());
    }

    public function leadvenda()
    {
        
        return view('admin.leads.index')
            ->with('titulo', 'Venda seu terreno')
            ->with('leads', Lead::where('area','Venda seu terreno')->get());
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function show(Lead $lead)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Lead  $lead
     * @return \Illuminate\Http\Response
     */
    public function destroy(Lead $lead)
    {
        //
    }

    public function obra(Request $request)
    {
        $validator = Validator::make(Input::all(), $this->rules_obra);
            if ($validator->fails()) {
            return Response::json(array('errors' => $validator->getMessageBag()->toArray()));
        } else {
            Lead::create([
                'area' => 'Obra',
                'name' => $request->name,
                'email' => 'Desconhecido',
                'phone' => $request->phone,
                'message' => 'QUERO UM ATENDIMENTO EXCLUSIVO',
                'city' => 'Desconhecida',
                'neighborhood' => 'Desconhecida',
                'utm_source' => $request->utm_source,
                'utm_medium' => $request->utm_medium,
                'utm_campaign' => $request->utm_campaign,
            ]);
            return response()->json('Obrigado', 200);
        }
    }

    public function venda(Request $request)
    {
        $validator = Validator::make(Input::all(), $this->rules_venda);
            if ($validator->fails()) {
            return Response::json(array('errors' => $validator->getMessageBag()->toArray()));
        } else {
            $lead = new Lead();
            $lead->area = 'Venda seu terreno';
            $lead->name = $request->name;
            $lead->email = $request->email;
            $lead->phone = $request->phone;
            $lead->message = $request->message;
            $lead->city = $request->city;
            $lead->neighborhood = $request->neighborhood;
            $lead->utm_source = $request->utm_source;
            $lead->utm_medium = $request->utm_medium;
            $lead->utm_campaign = $request->utm_campaign;
            $lead->save();
            return response()->json($lead);
        }
    }
}
