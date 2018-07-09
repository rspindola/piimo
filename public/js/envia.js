$(document).ready(function () {

    /****** Código de GeoLocalização, atualmente sem uso ******/
    /*window.local = '';
    var startPos;
    var geoSuccess = function (position) {
        startPos = position;
        window.local = '(' + startPos.coords.latitude + ',' + startPos.coords.longitude + ')';
        console.log(window.local);
    };

    var geoError = function (error) {
        console.log('Ocorreu um erro. Erro de código: ' + error.code);
        // Códigos de erros:
        //   0: unknown error
        //   1: permission denied
        //   2: position unavailable (error response from location provider)
        //   3: timed out
    };
    navigator.geolocation.getCurrentPosition(geoSuccess, geoError);*/

    /* Pegando os parametros da url */
    function getParameterByName(name) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            results = regex.exec(location.search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    /* utm_source */
    if (getParameterByName('utm_source')) {
        var utm_source = getParameterByName('utm_source');
        Cookies.set('utm_source', utm_source, {
            expires: 7
        });
    } else if (Cookies.get('utm_source')) {
        var utm_source = Cookies.get('utm_source');
    } else {
        var utm_source = 'Desconhecido';
    }

    /* utm_medium */
    if (getParameterByName('utm_medium')) {
        var utm_medium = getParameterByName('utm_medium');
        Cookies.set('utm_medium', utm_medium, {
            expires: 7
        });
    } else if (Cookies.get('utm_medium')) {
        var utm_medium = Cookies.get('utm_medium');
    } else {
        var utm_medium = 'Desconhecido';
    }

    /* utm_campaign */
    if (getParameterByName('utm_campaign')) {
        var utm_campaign = getParameterByName('utm_campaign');
        Cookies.set('utm_campaign', utm_campaign, {
            expires: 7
        });
    } else if (Cookies.get('utm_campaign')) {
        var utm_campaign = Cookies.get('utm_campaign');
    } else {
        var utm_campaign = 'Desconhecido';
    }


    /* Formate telefone */
    var SPMaskBehavior = function (val) {
            return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
        },
        spOptions = {
            onKeyPress: function (val, e, field, options) {
                field.mask(SPMaskBehavior.apply({}, arguments), options);
            }
        };

    $('input[name="phone-venda"]').mask(SPMaskBehavior, spOptions);
    $('input[name="phone-obra"]').mask(SPMaskBehavior, spOptions);
    $('input[name="phone-contato"]').mask(SPMaskBehavior, spOptions); 
    $('input[name="cel"]').mask(SPMaskBehavior, spOptions);
    $('input[name="phone"]').mask(SPMaskBehavior, spOptions);
    $('.phonemask').mask(SPMaskBehavior, spOptions);
    /* Validação do formulário */
    $('.form-venda').validate({
        // Exibir erros
        showErrors: function (errorMap, errorList) {
            // Limpando tooltips para elementos válidos
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);
                $element.data("title", "") // Desmarque a título - não há nenhum erro mais associado
                    .removeClass("error")
                    .tooltip("dispose");
            });

            // Criando novo tooltips para elementos inválidos
            $.each(errorList, function (index, error) {
                var $element = $(error.element);
                $element.tooltip("dispose") // Destruindo qualquer pré-existente tooltip assim que nós podemos repovoar com novos tooltips
                    .data("title", error.message)
                    .addClass("error")
                    .tooltip(); // Criar uma novo tooltip com base na messsage erro que acabamos de definir no título
            });
        },
        submitHandler: function (form) {
            $('.btn-success').addClass("hidden");
            $('.loader').removeClass("hidden");
            // obter os dados do formulário
            var formData = {

                'name': $('input[name=name-venda]').val(),
                'phone': $('input[name=phone-venda]').val(),
                'email': $('input[name=email-venda]').val(),
                'message': $('textarea[name=message-venda]').val(),
                'city': $('input[name=city-venda]').val(),
                'neighborhood': $('input[name=neighborhood-venda]').val(),
                'utm_source': utm_source,
                'utm_medium': utm_medium,
                'utm_campaign': utm_campaign,
            };
            $.ajax({})
                .done(function (json) {
                    if (json.erro !== null) {
                        $.ajax({
                                type: 'POST',
                                url: '/venda-seu-terreno/lead',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                data: formData,
                                dataType: 'json',
                                encode: true
                            })
                            .done(function (data) {
                                console.log(formData);
                                if ((data.errors)) {
                                    setTimeout(function () {
                                        swal({
                                            type: 'error',
                                            title: 'Atenção',
                                            text: 'Favor, preencher os campos corretamente.',
                                        })
                                        $('.btn-success').removeClass("hidden");
                                        $('.loader').addClass("hidden");
                                    }, 500);
                                } else {
                                    $(".form-venda")[0].reset();
                                    swal({
                                        type: 'success',
                                        title: 'Obrigado',
                                        text: 'Em breve entraremos em contato.',
                                    })
                                    $('.btn-success').removeClass("hidden");
                                    $('.loader').addClass("hidden");
                                    if (data.response) {
                                        //
                                    } else {
                                        $('.form-1').html('<div class="alert alert-warning">Houve um problema, tente novamente mais tarde.</div>');
                                    }
                                }
                            });
                    } else {
                        swal({
                            type: 'info',
                            title: 'CAGOU TUDO',
                            text: 'Em breve entraremos em contato.',
                        })
                    }
                });


        }
    }); /* fechamento $(form)validate */
    /* Validação do formulário */
    $('.ligamos').validate({
        // Exibir erros
        showErrors: function (errorMap, errorList) {
            // Limpando tooltips para elementos válidos
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);
                $element.data("title", "") // Desmarque a título - não há nenhum erro mais associado
                    .removeClass("error")
                    .tooltip("dispose");
            });

            // Criando novo tooltips para elementos inválidos
            $.each(errorList, function (index, error) {
                var $element = $(error.element);
                $element.tooltip("dispose") // Destruindo qualquer pré-existente tooltip assim que nós podemos repovoar com novos tooltips
                    .data("title", error.message)
                    .addClass("error")
                    .tooltip(); // Criar uma novo tooltip com base na messsage erro que acabamos de definir no título
            });
        },
        submitHandler: function (form) {
            $('.btn-success').addClass("hidden");
            $('.loader').removeClass("hidden");
            // obter os dados do formulário
            var formData = {

                'name': $('input[name=nome-liga]').val(),
                'phone': $('input[name=telefone-liga]').val(),
                'utm_source': utm_source,
                'utm_medium': utm_medium,
                'utm_campaign': utm_campaign,
            };
            $.ajax({})
                .done(function (json) {
                    if (json.erro !== null) {
                        $.ajax({
                                type: 'POST',
                                url: '/ligamos/lead',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                data: formData,
                                dataType: 'json',
                                encode: true
                            })
                            .done(function (data) {
                                console.log(formData);
                                if ((data.errors)) {
                                    setTimeout(function () {
                                        swal({
                                            type: 'error',
                                            title: 'Atenção',
                                            text: 'Favor, preencher os campos corretamente.',
                                        })
                                        $('.btn-success').removeClass("hidden");
                                        $('.loader').addClass("hidden");
                                    }, 500);
                                } else {
                                    $(".ligamos")[0].reset();
                                    swal({
                                        type: 'success',
                                        title: 'Obrigado',
                                        text: 'Em breve entraremos em contato.',
                                    })
                                    $('.btn-success').removeClass("hidden");
                                    $('.loader').addClass("hidden");
                                    if (data.response) {
                                        //
                                    } else {
                                        $('.form-1').html('<div class="alert alert-warning">Houve um problema, tente novamente mais tarde.</div>');
                                    }
                                }
                            });
                    } else {
                        swal({
                            type: 'info',
                            title: 'CAGOU TUDO',
                            text: 'Em breve entraremos em contato.',
                        })
                    }
                });


        }
    }); /* fechamento $(form)validate */
    /* Validação do formulário */
    $('.whatsapp').validate({
        // Exibir erros
        showErrors: function (errorMap, errorList) {
            // Limpando tooltips para elementos válidos
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);
                $element.data("title", "") // Desmarque a título - não há nenhum erro mais associado
                    .removeClass("error")
                    .tooltip("dispose");
            });

            // Criando novo tooltips para elementos inválidos
            $.each(errorList, function (index, error) {
                var $element = $(error.element);
                $element.tooltip("dispose") // Destruindo qualquer pré-existente tooltip assim que nós podemos repovoar com novos tooltips
                    .data("title", error.message)
                    .addClass("error")
                    .tooltip(); // Criar uma novo tooltip com base na messsage erro que acabamos de definir no título
            });
        },
        submitHandler: function (form) {
            alert('foi')
            $('.btn-success').addClass("hidden");
            $('.loader').removeClass("hidden");
            // obter os dados do formulário
            var formData = {

                'name': $('input[name=nome-wpp]').val(),
                'phone': $('input[name=telefone-wpp]').val(),
                'utm_source': utm_source,
                'utm_medium': utm_medium,
                'utm_campaign': utm_campaign,
            };
            $.ajax({})
                .done(function (json) {
                    if (json.erro !== null) {
                        $.ajax({
                                type: 'POST',
                                url: '/whatsapp/lead',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                data: formData,
                                dataType: 'json',
                                encode: true
                            })
                            .done(function (data) {
                                console.log(formData);
                                if ((data.errors)) {
                                    setTimeout(function () {
                                        swal({
                                            type: 'error',
                                            title: 'Atenção',
                                            text: 'Favor, preencher os campos corretamente.',
                                        })
                                        $('.btn-success').removeClass("hidden");
                                        $('.loader').addClass("hidden");
                                    }, 500);
                                } else {
                                    $(".whatsapp")[0].reset();
                                    swal({
                                        type: 'success',
                                        title: 'Obrigado',
                                        text: 'Em breve entraremos em contato.',
                                    })
                                    $('.btn-success').removeClass("hidden");
                                    $('.loader').addClass("hidden");
                                    if (data.response) {
                                        //
                                    } else {
                                        $('.form-1').html('<div class="alert alert-warning">Houve um problema, tente novamente mais tarde.</div>');
                                    }
                                }
                            });
                    } else {
                        swal({
                            type: 'info',
                            title: 'CAGOU TUDO',
                            text: 'Em breve entraremos em contato.',
                        })
                    }
                });


        }
    }); /* fechamento $(form)validate */
    /* Validação do formulário */
    $('.email').validate({
        // Exibir erros
        showErrors: function (errorMap, errorList) {
            // Limpando tooltips para elementos válidos
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);
                $element.data("title", "") // Desmarque a título - não há nenhum erro mais associado
                    .removeClass("error")
                    .tooltip("dispose");
            });

            // Criando novo tooltips para elementos inválidos
            $.each(errorList, function (index, error) {
                var $element = $(error.element);
                $element.tooltip("dispose") // Destruindo qualquer pré-existente tooltip assim que nós podemos repovoar com novos tooltips
                    .data("title", error.message)
                    .addClass("error")
                    .tooltip(); // Criar uma novo tooltip com base na messsage erro que acabamos de definir no título
            });
        },
        submitHandler: function (form) {
            $('.btn-success').addClass("hidden");
            $('.loader').removeClass("hidden");
            // obter os dados do formulário
            var formData = {

                'name': $('input[name=nome]').val(),
                'phone': $('input[name=telefone]').val(),
                'email': $('input[name=email]').val(),
                'message': $('textarea[name=mensagem]').val(),
                'utm_source': utm_source,
                'utm_medium': utm_medium,
                'utm_campaign': utm_campaign,
            };
            $.ajax({})
                .done(function (json) {
                    if (json.erro !== null) {
                        $.ajax({
                                type: 'POST',
                                url: '/email/lead',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                data: formData,
                                dataType: 'json',
                                encode: true
                            })
                            .done(function (data) {
                                console.log(formData);
                                if ((data.errors)) {
                                    setTimeout(function () {
                                        swal({
                                            type: 'error',
                                            title: 'Atenção',
                                            text: 'Favor, preencher os campos corretamente.',
                                        })
                                        $('.btn-success').removeClass("hidden");
                                        $('.loader').addClass("hidden");
                                    }, 500);
                                } else {
                                    $(".email")[0].reset();
                                    swal({
                                        type: 'success',
                                        title: 'Obrigado',
                                        text: 'Em breve entraremos em contato.',
                                    })
                                    $('.btn-success').removeClass("hidden");
                                    $('.loader').addClass("hidden");
                                    if (data.response) {
                                        //
                                    } else {
                                        $('.form-1').html('<div class="alert alert-warning">Houve um problema, tente novamente mais tarde.</div>');
                                    }
                                }
                            });
                    } else {
                        swal({
                            type: 'warning',
                            title: 'PROBLEMAS',
                            text: 'Em breve entraremos em contato.',
                        })
                    }
                });


        }
    }); /* fechamento $(form)validate */
    /* Fim validação e envio formulário */
    /* Validação do formulário */
    $('#form-obra').validate({
        // Exibir erros
        showErrors: function (errorMap, errorList) {
            // Limpando tooltips para elementos válidos
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);
                $element.data("title", "") // Desmarque a título - não há nenhum erro mais associado
                    .removeClass("error")
                    .tooltip("dispose");
            });

            // Criando novo tooltips para elementos inválidos
            $.each(errorList, function (index, error) {
                var $element = $(error.element);
                $element.tooltip("dispose") // Destruindo qualquer pré-existente tooltip assim que nós podemos repovoar com novos tooltips
                    .data("title", error.message)
                    .addClass("error")
                    .tooltip(); // Criar uma novo tooltip com base na messsage erro que acabamos de definir no título
            });
        },
        submitHandler: function (form) {
            
            $('.btn-success').addClass("hidden");
            $('.loader').removeClass("hidden");
            // obter os dados do formulário
            var formData = {

                'name': $('input[name=name-obra]').val(),
                'phone': $('input[name=phone-obra]').val(),
                'utm_source': utm_source,
                'utm_medium': utm_medium,
                'utm_campaign': utm_campaign,
            };
            $.ajax({})
                .done(function (json) {
                    if (json.erro !== null) {
                        $.ajax({
                                type: 'POST',
                                url: '/obra/lead',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                data: formData,
                                dataType: 'json',
                                encode: true
                            })
                            .done(function (data) {
                                console.log(formData);
                                if ((data.errors)) {
                                    setTimeout(function () {
                                        swal({
                                            type: 'error',
                                            title: 'Atenção',
                                            text: 'Favor, preencher os campos corretamente.',
                                        })
                                    }, 500);
                                    $('.btn-success').removeClass("hidden");
                                    $('.loader').addClass("hidden");
                                } else {
                                    $("#form-obra")[0].reset();
                                    $('#modalObra').modal('hide');
                                    swal({
                                        type: 'success',
                                        title: 'Obrigado',
                                        text: 'Em breve entraremos em contato.',
                                    })
                                    $('.btn-success').removeClass("hidden");
                                    $('.loader').addClass("hidden");
                                    if (data.response) {
                                        //
                                    } else {
                                        $('.form-1').html('<div class="alert alert-warning">Houve um problema, tente novamente mais tarde.</div>');
                                    }
                                }
                            });
                    } else {
                        swal({
                            type: 'error',
                            title: 'Favor, preencher os campos corretamente;',
                            text: 'Em breve entraremos em contato.',
                        })
                    }
                });

                

        }
    })

    /* Validação do formulário */
    $('#contato').validate({
        // Exibir erros
        showErrors: function (errorMap, errorList) {
            // Limpando tooltips para elementos válidos
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);
                $element.data("title", "") // Desmarque a título - não há nenhum erro mais associado
                    .removeClass("error")
                    .tooltip("dispose");
            });

            // Criando novo tooltips para elementos inválidos
            $.each(errorList, function (index, error) {
                var $element = $(error.element);
                $element.tooltip("dispose") // Destruindo qualquer pré-existente tooltip assim que nós podemos repovoar com novos tooltips
                    .data("title", error.message)
                    .addClass("error")
                    .tooltip(); // Criar uma novo tooltip com base na messsage erro que acabamos de definir no título
            });
        },
        submitHandler: function (form) {
            $('.btn-success').addClass("hidden");
            $('.loader').removeClass("hidden");
            // obter os dados do formulário
            var formData = {
                'area': $('input[name=area]').val(),
                'name': $('input[name=name-contato]').val(),
                'phone': $('input[name=phone-contato]').val(),
                'email': $('input[name=email-contato]').val(),
                'message': $('textarea[name=message-contato]').val(),
                'development': $('input[name=development-contato]').val(),
                'unity': $('input[name=unity-contato]').val(),
                'area': $('#area').val(),
                'isClient': $('select[name=isClient]').val(),
                'utm_source': utm_source,
                'utm_medium': utm_medium,
                'utm_campaign': utm_campaign,
            };
            $.ajax({})
                .done(function (json) {
                    if (json.erro !== null) {
                        $.ajax({
                                type: 'POST',
                                url: '/contato/envia',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                data: formData,
                                dataType: 'json',
                                encode: true
                            })
                            .done(function (data) {
                                console.log(formData);
                                if ((data.errors)) {
                                    setTimeout(function () {
                                        swal({
                                            type: 'error',
                                            title: 'Atenção',
                                            text: 'Favor, preencher os campos corretamente.',
                                        })
                                        $('.btn-success').removeClass("hidden");
                                        $('.loader').addClass("hidden");
                                    }, 500);
                                } else {
                                    $("#contato")[0].reset();
                                    swal({
                                        type: 'success',
                                        title: 'Obrigado',
                                        text: 'Em breve entraremos em contato.',
                                    })
                                    $('.btn-success').removeClass("hidden");
                                    $('.loader').addClass("hidden");
                                    if (data.response) {
                                        //
                                    } else {
                                        $('.form-1').html('<div class="alert alert-warning">Houve um problema, tente novamente mais tarde.</div>');
                                    }
                                }
                            });
                    } else {
                        swal({
                            type: 'info',
                            title: 'CAGOU TUDO',
                            text: 'Em breve entraremos em contato.',
                        })
                    }
                });
        }
    })

    /* Validação do formulário */
    $('#news-form').validate({
        // Exibir erros
        showErrors: function (errorMap, errorList) {
            // Limpando tooltips para elementos válidos
            $.each(this.validElements(), function (index, element) {
                var $element = $(element);
                $element.data("title", "") // Desmarque a título - não há nenhum erro mais associado
                    .removeClass("error")
                    .tooltip("dispose");
            });

            // Criando novo tooltips para elementos inválidos
            $.each(errorList, function (index, error) {
                var $element = $(error.element);
                $element.tooltip("dispose") // Destruindo qualquer pré-existente tooltip assim que nós podemos repovoar com novos tooltips
                    .data("title", error.message)
                    .addClass("error")
                    .tooltip(); // Criar uma novo tooltip com base na messsage erro que acabamos de definir no título
            });
        },
        submitHandler: function (form) {
            $('.btn-success').addClass("hidden");
            $('.loader').removeClass("hidden");
            // obter os dados do formulário
            var formData = {
                'name': $('input[name=name-news]').val(),
                'email': $('input[name=email-news]').val(),
                'utm_source': utm_source,
                'utm_medium': utm_medium,
                'utm_campaign': utm_campaign,
            };
            $.ajax({})
                .done(function (json) {
                    if (json.erro !== null) {
                        $.ajax({
                                type: 'POST',
                                url: '/newsletter/envia',
                                headers: {
                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                },
                                data: formData,
                                dataType: 'json',
                                encode: true
                            })
                            .done(function (data) {
                                console.log(formData);
                                if ((data.errors)) {
                                    setTimeout(function () {
                                        swal({
                                            type: 'error',
                                            title: 'Atenção',
                                            text: 'Favor, preencher os campos corretamente.',
                                        })
                                        $('.btn-success').removeClass("hidden");
                                        $('.loader').addClass("hidden");
                                    }, 500);
                                } else {
                                    $("#news-form")[0].reset();
                                    swal({
                                        type: 'success',
                                        title: 'Obrigado',
                                        text: 'Em breve entraremos em contato.',
                                    })
                                    $('.btn-success').removeClass("hidden");
                                    $('.loader').addClass("hidden");
                                    if (data.response) {
                                        //
                                    } else {
                                        $('.form-1').html('<div class="alert alert-warning">Houve um problema, tente novamente mais tarde.</div>');
                                    }
                                }
                            });
                    } else {
                        swal({
                            type: 'info',
                            title: 'CAGOU TUDO',
                            text: 'Em breve entraremos em contato.',
                        })
                    }
                });
        }
    })

});


