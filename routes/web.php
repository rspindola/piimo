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
    return 'Acesse /login para acessar o painel administrativo do sistema';
});
Route::get('/home', function () {
    return route('home');
});
Route::post('/dropzone/{id}', 'ImageController@store');
Auth::routes();
Route::prefix('admin')->middleware('auth')->group(function () {
    Route::get('/', 'HomeController@index')->name('home');
    Route::post('/changePassword','HomeController@changePassword')->name('changePassword');
    Route::resource('/empreendimentos', 'DevelopmentController');
    Route::resource('/leads', 'LeadController');
    Route::get('/leads-obras', 'LeadController@leadobra');
    Route::get('/leads-vendas', 'LeadController@leadvenda');
    Route::get('/leads-email', 'LeadController@leademail');
    Route::get('/leads-telefone', 'LeadController@leadligamos');
    Route::get('/leads-whatsapp', 'LeadController@leadwhatsapp');
    Route::resource('/images', 'ImageController');
    Route::resource('/contatos', 'ContactController');
    Route::resource('/curriculos', 'EmploymentController'); 
    Route::resource('/newsletter', 'NewsletterController'); 
});

/*
Route::get('/obrigado', function () {
    return view('site.obrigado');
})->name('obrigado');
Route::get('/obrigado-2', function () {
    return view('site.obrigado2');
})->name('obrigado2');
Route::get('/empreendimento', 'PiimoController@empreendimentos')->name('empreendimento.site.index');
Route::get('/empreendimento/{slug}/show', 'PiimoController@empreendimentosShow')->name('empreendimento.site.show');
Route::get('/obra-por-administracao', 'PiimoController@obra')->name('piimo.obra');
Route::post('/obra/lead', 'LeadController@obra')->name('lead.obra');
Route::get('/sobre', 'PiimoController@instituicional')->name('piimo.instituicional');
Route::get('/venda-seu-terreno', 'PiimoController@venda')->name('piimo.venda');
Route::post('/venda-seu-terreno/lead', 'LeadController@venda')->name('lead.venda');
Route::get('/trabalho', 'PiimoController@trabalho')->name('piimo.trabalho');
Route::post('/trabalhe/envia', 'EmploymentController@store')->name('piimo.trabalho.store');
Route::get('/contato', 'PiimoController@contato')->name('piimo.contato');
Route::post('/contato/envia', 'ContactController@store')->name('piimo.contato.store');
Route::post('/newsletter/envia', 'NewsletterController@store')->name('piimo.news.store');
Route::post('/email/lead', 'LeadController@email')->name('lead.email');
Route::post('/whatsapp/lead', 'LeadController@whatsapp')->name('lead.whatsapp');
Route::post('/ligamos/lead', 'LeadController@ligamos')->name('lead.ligamos');
route::get('/testedatabase', 'ImageController@teste');
*/