<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', function () {
    return route('home');
});

Auth::routes();
Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/', 'HomeController@index')->name('home');
    Route::resource('/empreendimentos', 'DevelopmentController');
    Route::resource('/leads', 'LeadController');
    Route::resource('/images', 'ImageController');
    Route::resource('/contatos', 'ContactController');
    Route::resource('/curriculos', 'EmploymentController'); 
});
Route::get('/empreendimento', 'PiimoController@empreendimentos')->name('empreendimento.site.index');
Route::get('/empreendimento/{slug}/show', 'PiimoController@empreendimentosShow')->name('empreendimento.site.show');
Route::get('/obra', 'PiimoController@obra')->name('piimo.obra');
Route::post('/obra/lead', 'LeadController@obra')->name('lead.obra');
Route::get('/sobre', 'PiimoController@instituicional')->name('piimo.instituicional');
Route::get('/venda-seu-terreno', 'PiimoController@venda')->name('piimo.venda');
Route::post('/venda-seu-terreno/lead', 'LeadController@venda')->name('lead.venda');
Route::get('/trabalho', 'PiimoController@trabalho')->name('piimo.trabalho');
Route::post('/trabalhe/envia', 'EmploymentController@store')->name('piimo.trabalho.store');
Route::get('/contato', 'PiimoController@contato')->name('piimo.contato');
Route::post('/contato/envia', 'ContactController@store')->name('piimo.contato.store');