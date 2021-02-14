$(function() {

    //変更内容を確認するボタンを押した際の処理
    $('#edit_btn').on('click', function(e) {
        e.preventDefault();

        $('.is_error').empty();

        //バリデーション処理
        //エラー数格納用変数の初期化
        let errorCount = 0;
        //エラーの種類を格納する配列の初期化
        let errorType = [];

        //nameバリデーション
        const editName = $('#name').val();
        //未入力または20文字以上であればエラー
        if(!editName) {
            errorCount++;
            errorType.push('nameRequired');
        }else if(editName.length > 20) {
            errorCount++;
            errorType.push('nameMax');
        }

        //emailバリデーション
        const editEmail = $('#email').val();
        //正規表現
        const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;
        //未入力または正規表現に合わなければエラー
        if(!editEmail.length) {
            errorCount++;
            errorType.push('emailRequired');
        }else if(!editEmail.match(regex)) {
            errorCount++;
            errorType.push('emailRegex');
        }

        //passwordバリデーション
        const editPassword = $('#password').val();
        const editConfirmPassword = $('#password-confirm').val();
        //8文字以下、またはeditPasswordとeditConfirmPasswordが不一致ならばエラー
        if(editPassword.length > 0 && editPassword.length < 8 ) {
            errorCount++;
            errorType.push('passwordLength');
        }else if(editPassword !== editConfirmPassword) {
            errorCount++;
            errorType.push('passwordConfirm');
        }

        //エラーがあればエラーメッセージを表示
        if(errorCount > 0) {
            //エラータイプによって表示を切り替え
            //name
            if($.inArray('nameRequired', errorType) !== -1) {
                $('#name_error').addClass('is_error');
                $('#name_error').text('※ ニックネームが入力されていません');
            }else if($.inArray('nameMax', errorType) !== -1) {
                $('#name_error').addClass('is_error');
                $('#name_error').text('※ ニックネームは20文字以内で入力してください');
            }

            //email
            if($.inArray('emailRequired', errorType) !== -1) {
                $('#email_error').addClass('is_error');
                $('#email_error').text('※ メールアドレスが入力されていません');
            }else if($.inArray('emailRegex', errorType) !== -1) {
                $('#email_error').addClass('is_error');
                $('#email_error').text('※ メールアドレスの入力形式が違います');
            }
            
            //password
            if($.inArray('passwordLength', errorType) !== -1) {
                $('#password_error').addClass('is_error');
                $('#password_error').text('※ パスワードは8文字以上で入力してください');
            }else if($.inArray('passwordConfirm', errorType) !== -1) {
                $('#password_error').addClass('is_error');
                $('#password_error').text('※ パスワード再入力欄と一致していません');
            }

            //トップへスクロールさせる
            $('html,body').animate({scrollTop:$('#app').offset().top});
        }else {
            //確認モーダルを表示
            $('#edit_modal').show();
            if($('#player_init:checked').val() == 'init') {
                $('.check_init').show();
            }
        }
    });

    //現在のパスワード入力欄からフォーカスアウトしたらバリデーション処理を行う
    $('#current_password').on('blur', function () {
        $('.is_error').empty();

        //バリデーション処理
        //エラー数格納用変数の初期化
        let errorFlg = 0;
        //エラーの種類を格納する配列の初期化
        let errorType;

        //current_passwordバリデーション
        const currentPassword = $('#current_password').val();
        //未入力、または8文字以下であればエラー
        if(!currentPassword) {
            errorFlg = 1;
            errorType = 'required';
        }else if(currentPassword.length < 8) {
            errorFlg = 1;
            errorType = 'min';
        }

        //エラーがあればエラーメッセージを表示
        if(errorFlg === 1) {
            //エラータイプによって表示を切り替え            
            //current_password
            if(errorType == 'required') {
                $('#current_password_error').text('※ 現在のパスワードを入力してください');
            }else {
                $('#current_password_error').text('※ パスワードは8文字以上です');
            }
        }
    })

    document.querySelector('#current_password').addEventListener('keyup', function() {
        if($(this).val().length >= 8) {
            $('#decide_btn').prop('disabled', false);
        }else {
            $('#decide_btn').prop('disabled', true);  
        }
    })

    //キャンセルボタンを押した際の処理
    $('#edit_cancel_btn').on('click', function(e) {
        e.preventDefault();

        //確認画面を閉じる
        $('#edit_modal').hide();
    })

    //登録の解除ボタンを押した際の処理
    $('#delete_check').on('click', function(e) {
        e.preventDefault();
        
        //確認モーダルの表示
        $('#delete_modal').show();
    })

    $('#delete_cancel_btn').on('click', function(e) {
        e.preventDefault();

        $('#delete_modal').hide();
    })
})