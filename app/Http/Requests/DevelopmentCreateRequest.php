<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DevelopmentCreateRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|max:191',
            'logo' => 'required|max:191',
            'img_featured' => 'required|max:191',
            'street' => 'required|max:191',
            'number' => 'required|max:191',
            'neighborhood' => 'required|max:191',
            'city' => 'required|max:191',
            'country' => 'required|max:191',
            'zipcode' => 'required|max:191',
            'rooms' => 'required|max:191',
            'footage' => 'required|max:191',
            'description' => 'required',
            'status' => 'required|max:191',
            'lat' => 'required|max:191',
            'lng' => 'required|max:191',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'O campo nome é obrigatório',
            'logo.required' => 'O campo logo é obrigatório',
            'img_featured.required' => 'O campo imagem fachada é obrigatório',
            'street.required' => 'O campo logradouro é obrigatório',
            'number.required' => 'O campo número é obrigatório',
            'neighborhood.required' => 'O campo bairro é obrigatório',
            'city.required' => 'O campo cidade é obrigatório',
            'country.required' => 'O campo UF é obrigatório',
            'zipcode.required' => 'O campo CEP é obrigatório',
            'rooms.required' => 'O campo quartos é obrigatório',
            'footage.required' => 'O campo metragem é obrigatório',
            'description.required' => 'O campo descrição é obrigatório',
            'status.required' => 'O campo status é obrigatório',
            'lat.required' => 'O campo é obrigatório',
            'lng.required' => 'O campo é obrigatório',
        ];
    }
}
