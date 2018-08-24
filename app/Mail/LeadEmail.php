<?php
namespace App\Mail;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Queue\ShouldQueue;


class LeadEmail extends Mailable
{
    use Queueable, SerializesModels;
    public $dados;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($dados)
    {
        $this->dados = $dados;
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $address = 'piimocontato@gmail.com';
        $subject = 'Contato de lead pelo site!';
        $name = $this->dados['name'];
        return $this->view('email.lead')
                    ->from($address, $name)
                    ->subject($subject)
                    ->with([
                        'name' => $this->dados['name'],
                        'email' => $this->dados['email'],
                        'phone' => $this->dados['phone'],
                        'message' => $this->dados['message'],
                        'utm_source' => $this->dados['utm_source'],
                        'utm_medium' => $this->dados['utm_medium'],
                        'utm_campaign' => $this->dados['utm_campaign'],
                    ]);;
    }
}