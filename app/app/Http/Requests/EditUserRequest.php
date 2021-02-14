<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Auth;
use App\Rules\CurrentPassword;

class EditUserRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:20'],
            'email' => ['required', 'string', 'email', 'unique:users,email,'.Auth::user()->email.',email', 'max:255'],
            'password' => ['nullable', 'min:8', 'max:255', 'confirmed'],
            'password_confirmation' => ['nullable'],
            'current_password' => ['required', 'min:8', new CurrentPassword]
        ];
    }

    public function messages()
    {
        return [
            'required' => 'この項目は必須です',
            'string' => '文字列で入力してください',
            'max' => ':max文字以下で入力してください',
            'min' => ':min文字以上で入力してください',
            'email' => 'メールアドレスの入力形式が違います',
            'confirmed' => '確認フィールドと一致しません',
            'unique' => '入力されたメールアドレスは既に登録されています',
        ];
    }
}
