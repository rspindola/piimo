<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Alert;
use Illuminate\Support\Facades\Hash;
use Auth;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('home');
    }
    

    public function changePassword(Request $request)

    {

        if (!(Hash::check($request->get('current-password'), Auth::user()->password))) {

        // The passwords matches

        return redirect()->back()->with("error","Senha atual não confere. Por favor, tente novamente.");

        }

        if(strcmp($request->get('current-password'), $request->get('new-password')) == 0){

        //Current password and new password are same

        return redirect()->back()->with("error","Nova senha não pode ser igual a anterior. Por favor, escolha uma nova senha.");

        }

        $this->validate($request, [

        'current-password' => 'required',

        'new-password' => 'required|string|min:6|confirmed',

        ]);

        //Change Password

        $user = Auth::user();

        $user->password = bcrypt($request->get('new-password'));

        $user->save();

        return redirect()->back()->with("success","Senha alterada com sucesso!");

    }

}
