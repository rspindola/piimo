<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactFormRequest extends FormRequest
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
            'street' => 'required|max:191',
            'number' => 'required|max:191',
            'area' => 'required|max:191',
            'isClient' => 'required',
            'development' => 'required',
            'unity' => 'required',
            'message' => 'required',
        ];
    }
}
