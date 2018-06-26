<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class EmploymentFormRequest extends FormRequest
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
            'email' => 'required|email',
            'phone' => 'required|max:191',
            'cel' => 'required|max:191',
            'linkedin' => 'required',
            'attachment' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Nome é obrigatório',
            'email.required' => 'E-mail é obrigatório',
            'phone.required' => 'Telefone é obrigatório',
            'cel.required' => 'Celular é obrigatório',
            'linkedin.required' => 'Linkedin é obrigatório',
            'attachment.required' => 'Anexo é obrigatório',
        ];
    }
}
