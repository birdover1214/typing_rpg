//かな辞書 kanaDictionary
const kanaDict = {
    "あ":["a"], "い":["i","yi"], "う":["u","wu","whu"], "え":["e"], "お":["o"],
    "か":["ka","ca"], "き":["ki"], "く":["ku","cu","qu"], "け":["ke"], "こ":["ko","co"],
    "さ":["sa"],"し":["si","ci","shi"],"す":["su"],"せ":["se","ce"],"そ":["so"],
    "た":["ta"],"ち":["ti","chi"],"つ":["tu","tsu"],"て":["te"],"と":["to"],
    "な":["na"],"に":["ni"],"ぬ":["nu"],"ね":["ne"],"の":["no"],
    "は":["ha"],"ひ":["hi"],"ふ":["hu","fu"],"へ":["he"],"ほ":["ho"],
    "ま":["ma"],"み":["mi"],"む":["mu"],"め":["me"],"も":["mo"],
    "や":["ya"],"ゆ":["yu"],"よ":["yo"],
    "ら":["ra"],"り":["ri"],"る":["ru"],"れ":["re"],"ろ":["ro"],
    "わ":["wa"],"を":["wo"],"ん":["n","nn","xn"],
    "が":["ga"],"ぎ":["gi"],"ぐ":["gu"],"げ":["ge"],"ご":["go"],
    "ざ":["za"],"じ":["zi","ji"],"ず":["zu"],"ぜ":["ze"],"ぞ":["zo"],
    "だ":["da"],"ぢ":["di"],"づ":["du"],"で":["de"],"ど":["do"],
    "ば":["ba"],"び":["bi"],"ぶ":["bu"],"べ":["be"],"ぼ":["bo"],
    "ぱ":["pa"],"ぴ":["pi"],"ぷ":["pu"],"ぺ":["pe"],"ぽ":["po"],
    "きゃ":["kya","kilya","kixya"],"きぃ":["kyi","kili","kixi","kilyi","kixyi"],"きゅ":["kyu","kilyu","kixyu"],"きぇ":["kye","kile","kixe","kilye","kixye"],"きょ":["kyo","kilyo","kixyo"],
    "ぎゃ":["gya","gilya","gixya"],"ぎぃ":["gyi","gili","gixi","gilyi","gixyi"],"ぎゅ":["gyu","gilyu","gixyu"],"ぎぇ":["gye","gile","gixe","gilye","gixye"],"ぎょ":["gyo","gilyo","gixyo"],
    "しゃ":["sya","sha","sixya","silya","shixya","shilya","cixya","cilya"],"しぃ":["syi","sili","sixi","silyi","sixyi","shixi","shili","cixi","cili"],"しゅ":["syu","shu","silyu","sixyu","shixyu","shilyu","cixyu","cilyu"],"しぇ":["she","sye","sile","sixe","silye","sixye","shixe","shile","cixe","cile"],"しょ":["syo","sho","silyo","sixyo","shixyo","shilyo","cixyo","cilyo"],
    "じゃ":["ja","zya","jya","zilya","zixya","jilya","jixya"],"じぃ":["zyi","jyi","zili","zixi","jili","jixi","zilyi","zixyi","jilyi","jixyi"],"じゅ":["zyu","ju","jyu","zixyu","zilyu","jixyu","jilyu"],"じぇ":["zye","je","jye","zixe","zile","jixe","jile"],"じょ":["zyo","jo","jyo","zixyo","zilyo","jixyo","jilyo"],
    "ちゃ":["tya","cha","cya","tixya","tilya","chixya","chilya"],"ちぃ":["tyi","cyi","tixi","tili","chixi","chili"],"ちゅ":["tyu","chu","cyu","tixyu","tilyu","chixyu","chilyu"],"ちぇ":["tye","che","cye","tixe","tile","chixe","chile"],"ちょ":["tyo","cho","cyo","tixyo","tilyo","chixyo","chilyo"],
    "にゃ":["nya","nixya","nilya"],"にぃ":["nyi","nixi","nili"],"にゅ":["nyu","nixyu","nilyu"],"にぇ":["nye","nixe","nile"],"にょ":["nyo","nixyo","nilyo"],
    "ひゃ":["hya","hixya","hilya"],"ひぃ":["hyi","hixi","hili"],"ひゅ":["hyu","hixyu","hilyu"],"ひぇ":["hye","hixe","hile"],"ひょ":["hyo","hixyo","hilyo"],
    "ふぁ":["fa","fwa","fuxa","fula","huxa","hula"],"ふぃ":["fi","fwi","fyi","fuxi","fuli","huxi","huli"],"ふぅ":["fwu","fuxu","fulu","huxu","hulu"],"ふぇ":["fe","fwe","fye","fuxe","fule","huxe","hule"],"ふぉ":["fo","fwo","fuxo","fulo","huxo","hulo"],
    "くぁ":["qwa","qa","kwa","kuxa","kula","quxa","qula","cuxa","cula"],"くぃ":["qwi","qi","qyi","kuxi","kuli","quxi","quli","cuxi","culi"],"くぅ":["qwu","kuxu","kulu","quxu","qulu","cuxu","culu"],"くぇ":["qwe","qe","qye","kuxe","kule","quxe","qule","cuxe","cule"],"くぉ":["qwo","qo","kuxo","kulo","quxo","qulo","cuxo","culo"],
    "ぐぁ":["gya","guxa","gula"],"ぐぃ":["gyi","guxi","guli"],"ぐぅ":["gyu","guxu","gulu"],"ぐぇ":["gye","guxe","gule"],"ぐぉ":["gyo","guxo","gulo"],
    "すぁ":["swa","suxa","sula"],"すぃ":["swi","suxi","suli"],"すぅ":["swu","suxu","sulu"],"すぇ":["swe","suxe","sule"],"すぉ":["swo","suxo","sulo"],
    "てゃ":["tha","texya","telya"],"てぃ":["thi","texi","teli"],"てゅ":["thu","texyu","telyu"],"てぇ":["the","texe","tele"],"てょ":["tho","texyo","telyo"],
    "とぁ":["twa"],"とぃ":["twi"],"とぅ":["twu","toxu","tolu"],"とぇ":["twe"],"とぉ":["two","toxo","tolo"],
    "ぢゃ":["dya","dixya","dilya"],"ぢぃ":["dyi"],"ぢゅ":["dyu"],"ぢぇ":["dye"],"ぢょ":["dyo"],
    "でゃ":["dha"],"でぃ":["dhi","dexi","deli"],"でゅ":["dhu","dexyu","delyu"],"でぇ":["dhe"],"でょ":["dho"],
    "どぁ":["dwa"],"どぃ":["dwi"],"どぅ":["dwu","doxu","dolu"],"どぇ":["dwe"],"どぉ":["dwo"],
    "びゃ":["bya","bixya","bilya"],"びぃ":["byi"],"びゅ":["byu","bixyu","bilyu"],"びぇ":["bye"],"びょ":["byo","bixyo","bilyo"],
    "ぴゃ":["pya","pixya","pilya"],"ぴぃ":["pyi"],"ぴゅ":["pyu","pixyu","pilyu"],"ぴぇ":["pye"],"ぴょ":["pyo","pixyo","pilyo"],
    "りょ":["ryo","rixyo","rilyo"],
    "ー":["-"]," ":[" "],"、":[","],"？":["?"],"！":["!"],"。":["."],
    "っ":["xtu","ltu","xtsu","ltsu"],
    "ぁ":["xa","la"],
    "ぇ":["xe","le"],
    "ゃ":["lya","xya"],"ゅ":["xyu","lyu"],"ょ":["lyo","xyo"],
    "a":"a","b":"b","c":"c","d":"d","e":"e","f":"f","g":"g","h":"h","i":"i","j":"j","k":"k","l":"l","m":"m","n":"n",
    "o":"o","p":"p","q":"q","r":"r","s":"s","t":"t","u":"u","v":"v","w":"w","x":"x","y":"y","z":"z",
    "":"",",":","
}

const nextExpTable = [0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48, 51, 54, 57, 60,
                    65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145, 150, 155, 160,
                    170, 180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330, 340, 350, 360,
                    370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480, 490, 500, 510, 520, 530, 540, 550, 560,
                    570, 580, 590, 600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740, 750, 760]

$(function() {
    //ajax通信のセットアップ
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN' : $('meta[name="csrf-token"]').attr('content')
        },
        dataType: 'json',
        processData: false,
        contentType: false,
        timeout: 10000,
    });

    //各取得データを保持する為の変数
    let questions = [];
    let player = [];
    let equipItem = [];
    let monster = [];
    let dropItem = [];
    let user = [];
    let field = [];
    //現在の画面ステータスを管理する
    //0:フィールド選択中, 1:バトル開始前, 2:バトル中, 3:バトル勝利, 4:バトル敗北
    let status = 0;
    //勝利後のテキストスクロールに利用
    let displayEnter = 0;
    //バトル開始前のカウントダウン用
    let readyTime = 3;
    //questionsの各値を格納しておく変数
    let words = [];
    let wordsKana = [];
    let wordsRomaji = [];
    //問題文を区切って格納する為の変数
    let separationKana = [];
    let separationRomaji = [];
    //あいまい入力用の一時的な辞書として利用する為の変数
    let aditionalDict = [];
    //入力対象を格納する為の変数
    let currentStr,currentRomaji,currentChar;
    //入力対象を判定する為の変数
    let charNum = 0;
    //正解数とミス数をカウントする変数
    let correctCount = 0;
    let mistakeCount = 0;
    //スコア
    let score;
    //playerが与えるダメージ
    let strike;
    //playerが受けるダメージ
    let damage;
    //タイプミス時のダメージ
    let mistakeDamage;
    //
    let judgeTyping = [];
    let finishRomaji = [];
    //
    let flagN = 0;
    //レベルアップ判定に利用
    let levelUpCount = 0;
    let bonusPoint = 0;
    //アイテムドロップの判定に利用
    let judgeDrop;


    //フィールドを選択した際の処理
    $('.field_btn').on('click', function(e) {
        e.preventDefault();
        let text = $('#battle_text').html();
        $('#battle_text').html(text + "<br>" + "通信中...")

        let sendData = new FormData();
        sendData.append('field_id', $(this).val());

        $.ajax({
            url: '/getdata',
            type: 'POST',
            data: sendData,
        })
        .done(function(response) {
            questions = response.questions;
            player = response.player;
            user = response.user;
            field = response.field;

            //各値のセット
            if(!response.item.length) {
                $('.attack').text(player.attack);
                $('.item_attack').text('0');
                $('.defence').text(player.defence);
                $('.item_defence').text('0');
                $('.misstake_damage').text('1');
            }else {
                equipItem = response.item;
                $('.attack').text(player.attack + equipItem.attack);
                $('.item_attack').text(equipItemtem.attack);
                $('.defence').text(player.defence + equipItem.defence);
                $('.item_defence').text(equipItem.defence);
                $('.misstake_damage').text(equipItem.misstake_damage + 1);
                $('.equipment_image').attr('src', '/images/item_images/'+equipItem.item_image);
            }

            $('.player_name').text(user.name);
            $('.player_level').text(player.level);
            $('#player_hp').text(player.hp);

            let number = parseInt(Math.random() * 5);

            monster = response.monsters[number];
            dropItem = response.dropItems[number];
            $('.monster_name').text(monster.name);
            $('#monster_hp').text(monster.hp);

            if(player.player_image == 1) {
                $('.player_image').attr('src', '/images/player_images/主人公男h150.png');
            }else {
                $('.player_image').attr('src', '/images/player_images/主人公女h150.png');
            }

            $('.monster_image').attr('src', '/images/monster_images/' + monster.image);

            $('.rpg_display').css('background-image', 'url(/images/field_images/' + field.image + ')');

            $('.select_field_display').css('display', 'none');
            $('#battle_text').html(monster.name + 'があらわれた！' + "<br>" + 'BATTLE STARTボタンをクリック または スペースキーを押して戦闘開始' + "<br>" + '※ サウンドが流れます');
            $('#battle_btn').css('display', 'inline-block');

            if(!response.item.length) {
                if(monster.attack < player.defence) {
                    damage = monster.min_attack;
                }else {
                    damage = monster.attack - player.defence;
                }
                strike = player.attack;
                mistakeDamage = 1;
            }else {
                if(monster.attack < (player.defence + item.defence)) {
                    damage = monster.min_attack;
                }else {
                    damage = monster.attack - (player.defence + item.defence);
                }
                strike = player.attack + item.attack;
                mistakeDamage = item.misstake_damage;
            }

            status = 1;
        })
        .fail(function(response) {

            $('#battle_text').html('通信に失敗しました。');
        })
    });

    $('#battle_btn').on('click', function() {
        $('#battle_btn').css('display', 'none');
        $('#selectAudio')[0].play();
        ready();
    });


    function ready() {
        readyTime = 3;
        //問題の出題準備
        for(let i = 0; i < questions.length; i++) {
            words.push(questions[i].word);
            wordsKana.push(questions[i].word_kana);
        }
        //スコアを初期化
        $('#scoredis').html("");
        $('#ready_count').css('display', 'block');
        //ゲーム開始カウントダウン
        let readyTimer = setInterval(function(){
            //$('#count').html("<span class='time'>"+readyTime+"</span>");
            $('#ready_count').text(readyTime);
            readyTime--;
            if(readyTime < 0){
                clearInterval(readyTimer);
                status = 2;
                gameStart();
            }
        }, 1000);
    }
    
    function gameStart() {
        $('#ready_count').css('display', 'none');
        //出題処理
        setQuestion();
        //各値の初期化
        score = 0;
        correctCount = 0;
        mistakeCount = 0;
        //サウンドの再生
        $('#battleAudio')[0].play();
        $('#battleAudio')[0].volume = 0.4;
        $('#battleAudio')[0].loop = true;
        $('.readyVoice')[0].play();
        //monsterの攻撃カウントを開始する
        $('#count').css('display', 'block');
        monsterAttackCount();
        status = 2;
    }

    // function changeDisplay(status) {
    //     switch(status) {
    //         case 0:
                
    //     }
    // }

    function setQuestion() {
        //ランダムに出題を行う
        let number = parseInt( Math.random() * words.length );
        $('#word').css('display', 'block');
        $('#word').text(words[number]);
        $('#word_kana').css('display', 'block');
        $('#word_kana').text(wordsKana[number]);
        //ひらがな文字列を分割する
        separationKana = wordSeparation(wordsKana[number]);
        //分割したひらがな文字列をローマ字文字列に変換したものと、例外入力用の追加辞書を作成
        [separationRomaji, aditionalDict] = wordChangeRomaji(separationKana);

        $('#word_romaji').css('display', 'block');
        $('#word_romaji').text(separationRomaji.join(''));
        //分割済みの問題文の先頭1要素を取り出す
        currentStr = separationKana.shift();
        currentRomaji = separationRomaji.shift();

        charInsort();
    }

    //問題文を分割する処理
    function wordSeparation(kana) {
        //returnする文字列を格納する変数
        let returnKana = [];
        //"っ"の判定に利用
        let judgeChar = ["a", "i", "u", "e", "o", "n"];

        //受け取った問題文の文字列を1文字づつ判定
        for(let i = 0; i < kana.length; i++) {
            //小文字の処理
            //先頭文字でなく、1つ前の文字と今回の文字を繋げた文字列がkanaDictにある場合("しゃ"など)
            if(i > 0 && kanaDict[kana[i-1] + kana[i]]) {
                //返す文字列に入れていた最後の要素を取り出す
                let beforeKana = returnKana.pop();
                //最後の要素に今回の文字を連結して1つのブロックとして再度挿入
                returnKana.push(beforeKana + kana[i]);

            //"っ"の処理
            //最後の文字でなく、判定中の文字が"っ"であり、次の文字があ行またはな行ではない場合
            }else if(i != kana.length - 1 && kana[i] == "っ" && judgeChar.indexOf(kanaDict[kana[i+1]][0][0]) == -1) {
                //次の文字を連結して1つのブロックとして挿入
                returnKana.push(kana[i] + kana[i+1]);
                //次の文字の判定を飛ばす
                i++;

            //それ以外の通常判定
            }else {
                returnKana.push(kana[i]);
            }
        }
        return returnKana;
    }

    function wordChangeRomaji(separationKana) {
        //returnするローマ字文字列
        let returnRomaji = [];
        //returnする例外入力用辞書
        let returnAditionalDict = [];
        //"ん"をnnまたはxnと入力しなければならない際の判定に利用
        let judgeN = ["a", "i", "u", "e", "o", "y", "n"];
        //あいまい入力の一時的なリスト
        let aditionalList = [];

        //分割されたブロック毎に判定を行う
        for(let i = 0; i < separationKana.length; i++) {

            //"ん"以外のブロック単位の分割文字列がkanaDictに登録されていた場合
            if(separationKana[i] != "ん" && kanaDict[separationKana[i]]) {
                //kanaDictに登録されている打ち方の内、最初の1つを挿入する
                returnRomaji.push(kanaDict[separationKana[i]][0]);

            //"ん"の処理
            //separationKana[i]が"ん"であり、文末の場合
            }else if(separationKana[i] == "ん" && i == separationKana.length - 1) {
                //nnもしくはxnと入力する必要がある為、kanaDict["ん"]の2番目を挿入する
                returnRomaji.push(kanaDict[separationKana[i]][1]);

            //separationKana[i]が"ん"であり、separationKana[i+1]があ行、な行、や行、"ん"の場合
            }else if(i != separationKana.length - 1 && separationKana[i] == "ん" && judgeN.indexOf(kanaDict[separationKana[i+1]][0][0]) != -1 ) {
                //nnもしくはxnと入力する必要がある
                returnRomaji.push(kanaDict[separationKana[i]][1]);

            //それ以外の"ん"の処理
            }else if(separationKana[i] == "ん") {
                //separationKana[i+1]があ行、な行、や行、"ん"でないのでkanaDict["ん"]の最初の打ち方を挿入する
                returnRomaji.push(kanaDict[separationKana[i]][0]);

            }else {
                //kanaDictに登録されていない場合、分割文字列の最初の1文字を除いた文字列をkanaDictから検索して代入
                strList = separationKana[i].length == 2 ? kanaDict[separationKana[i][1]] : kanaDict[separationKana[i][1] + separationKana[i][2]];
                //strListの要素の数だけ判定を行う
                for(let j = 0; j < strList.length; j++) {
                    //子音部分のローマ字を繰り返すことにより、"っ"を表現する
                    aditionalList.push(strList[j][0] + strList[j]);
                }
                //returnAditionalDictに登録
                returnAditionalDict[separationKana[i]] = aditionalList;
                //aditionalDictに登録されている打ち方の内、最初の1つを挿入する
                returnRomaji.push(returnAditionalDict[separationKana[i]][0]);
            }
        }
        return [returnRomaji, returnAditionalDict];
    }

    //打キー対象のセット処理
    function charInsort(){
        currentChar = $('#word_romaji').text().charAt(charNum);
    }

    function textScroll(){
        battle_text.scroll(0, battle_text.scrollHeight);
    }

    function monsterAttack() {
        //player.hpの減少処理
        $('#player_hp').html(parseInt($('#player_hp').text()) - damage);

        $('#attackAudio')[0].play();

        $('#battle_text').html($('#battle_text').html() + "<br>" + monster.name + "の攻撃！主人公は " + damage + " のダメージ！");

        textScroll();

        if(parseInt($('#player_hp').text()) <= 0){
            $('#player_hp').text(0);
            gameover();
        }

        monsterAttackCount();
    }

    function monsterAttackCount(){
        //timeRemaining変数にmonster.attack_intervalを代入する
        let timeRemaining = monster.attack_interval;
        //モンスターの攻撃カウントダウン処理
        let attackTimer = setInterval(function(){
            if(parseInt($('#player_hp').text()) <= 0 || parseInt($('#monster_hp').text()) <= 0){
                return false;
            }
            timeRemaining--;
            $('#count').html("モンスターの攻撃まであと <span class='time'>" + timeRemaining + "</span> 秒");
            if(timeRemaining <= 0){
                clearInterval(attackTimer);
                //モンスター攻撃処理
                monsterAttack();
            }
        }, 1000);
    }

    //スペースキーを押した際の処理
    $('body').on('keydown', function(e) {

        if(status == 0) {
            switch(e.key) {
                case 'F5':
                    location.reload();
            }

        }

        if(status == 1) {
            switch(e.key) {
                case 'F5':
                    location.reload();

                case ' ':
                    $('#battle_btn').trigger('click');

            }
        }

        //以下バトル中のタイプ処理
        if(status == 2) {
            let keyStr = e.key;

            // if(monster_hp.innerHTML <= 0 || player_hp.innerHTML <= 0){
            //     return false;
            // }
    
            judgeTyping += keyStr;
            finishRomaji += keyStr;
    
            //タイプしたキーが正解か不正解か判定
            //表示されているローマ字と同じキーをタイプした場合
            if(keyStr == currentChar){
    
                correctType();
                //
                currentRomaji = currentRomaji.slice(1);
    
            //flagNが1であり、かつnをタイプした場合も正解とする
            }else if(flagN == 1 && keyStr == "n") {
                //表示するローマ字文字列を変更
                $('#word_romaji').text(finishRomaji + currentRomaji + separationRomaji.join(''));
                correctType();
                judgeTyping = "";
                flagN = 0;
            
            //表示と異なるキーをタイプした場合
            }else{
                //入力中の文字列がkanaDictにあればremainingListに正解パターンを全て代入し、
                //ない場合はaditionalDictのパターンを代入
                if(kanaDict[currentStr]) {
                   remainingList = kanaDict[currentStr];
                }else {
                    remainingList = aditionalDict[currentStr];
                }
                //正解パターンと照合を行う
                anotherList = collationList(judgeTyping, remainingList);
                if(anotherList != "") {
                    currentRomaji = anotherList[0].slice(judgeTyping.length);
                    //表示するローマ字文字列を変更
                    $('#word_romaji').text(finishRomaji + currentRomaji + separationRomaji.join(''));
                    correctType();
    
                //
                }else if(currentStr.length >= 2) {
                    remainingList = kanaDict[currentStr[0]];
                    anotherList = collationList(judgeTyping, remainingList);
    
                    if(anotherList != "") {
                        nextStr = currentStr.slice(1);
                        currentStr = currentStr[0];
                        separationKana.unshift(nextStr);
                        currentRomaji = anotherList[0].slice(judgeTyping.length);
                        nextRomaji = kanaDict[nextStr][0];
                        separationRomaji.unshift(nextRomaji);
    
                        $('#word_romaji').text(finishRomaji + currentRomaji + separationRomaji.join(''));
                        correctType();
    
                    }else if(currentStr.length == 3) {
                        remainingList = aditionalDict[currentStr];
                        anotherList = collationList(judgeTyping, remainingList);
    
                        if(anotherList != "") {
                            nextStr = currentStr[2];
                            currentStr.pop();
                            separationKana.unshift(nextStr);
                            currentRomaji = anotherList[0].slice(judgeTyping.length);
                            nextRomaji = kanaDict[nextStr][0];
                            separationRomaji.unshift(nextRomaji);
    
                            $('#word_romaji').text(finishRomaji + currentRomaji + separationRomaji.join(''));
                            correctType();
    
                        }else {
                            missType();
                        }
    
                    }else {
                        missType();
                    }
                }else {
                    missType();
                }
                flagN = 0;
            }
    
            function collationList(judgeTyping, remainingList) {
                //照合する打ち方を格納する変数
                let returnAnotherList = [];
                //remainingListの要素の数の分照合を行う
                for(let i = 0; i < remainingList.length; i++) {
    
                    if(remainingList[i].startsWith(judgeTyping)) {
                        returnAnotherList.push(remainingList[i]);
                    }
                }
    
                return returnAnotherList;
            }
    
            function correctType() {
                //正解音と不正解音をリセットし、正解音を鳴らす
                //document.getElementById('missaudio').pause();
                $('#missAudio')[0].currentTime = 0;
                //document.getElementById('correctaudio').pause();
                $('#correctAudio')[0].currentTime = 0;
                $('#correctAudio')[0].play();
                //正解した文字の色を切り替える
                $('#word_romaji').html("<span style='color: red;'>" + $('#word_romaji').text().substr(0, charNum+1) + "</span>" + $('#word_romaji').text().substr(charNum + 1, $('#word_romaji').text().length));
                //次の文字のセットと正解数のカウントアップ
                charNum++;
                correctCount++;
    
                $('#monster_hp').text(parseInt($('#monster_hp').text()) - strike);
                charInsort();
            }
    
            function missType() {
                //正解音と不正解音をリセットし、不正解音を鳴らす
                //document.getElementById('missaudio').pause();
                $('#missAudio')[0].currentTime = 0;
                //document.getElementById('correctaudio').pause();
                $('#correctAudio')[0].currentTime = 0;
                $('#missAudio')[0].play();
                //不正解数のカウントアップ
                mistakeCount++;
                finishRomaji = finishRomaji.slice(0, -1);
                judgeTyping = judgeTyping.slice(0, -1);
    
                $('#player_hp').text(parseInt($('#player_hp').text()) - mistakeDamage);
                $('#battle_text').html($('#battle_text').html() + "<br>タイプミス！" + user.name + "は " + mistakeDamage + " のダメージ！");
                
                textScroll();    
            }
    
            if(monster_hp.innerHTML <= 0){
                victory();
            }
    
            if(player_hp.innerHTML <= 0){
                gameover();
            }
    
            if(currentRomaji == "") {
                currentRomaji = separationRomaji.shift();
                currentStr = separationKana.shift();
    
                if(judgeTyping == "n") {
                    flagN = 1;
                }else {
                    flagN = 0;
                }
    
                judgeTyping = "";
            }
    
            //次の問題の出題処理
            if(charNum == $('#word_romaji').text().length){
                charNum = 0;
                judgeTyping = [];
                finishRomaji = [];
                setQuestion();
            }
        }


        if(status == 3 && e.key == "Enter") {
            if(displayEnter == 0) {
                addExp();
            }else if(displayEnter == 1) {
                levelUp();
            }else if(displayEnter == 2) {
                addStatusSelect();
            }else if(displayEnter == 4) {
                itemDrop();
            }else {
                battleFinish();
            }
        }

        if(status == 3 && displayEnter == 3) {
            if(e.key == 1) {
                addHp();
            }else if(e.key == 2) {
                addAttack();
            }else if(e.key == 3) {
                addDefence();
            }else {
                return false;
            }
        }

        if(status == 4) {
            if(e.key == "Enter") {
                battleFinish();
            }
        }
    });


    //勝利処理
    function victory(){
        //モンスター攻撃カウントと問題文を非表示にする
        $('#count').css('display', 'none');
        $('#word').css('display', 'none');
        $('#word_kana').css('display', 'none');
        $('#word_romaji').css('display', 'none');
        
        //戦闘BGMを停止し、勝利BGMを流す
        $('#battleAudio')[0].pause();
        $('#victoryAudio')[0].play();
        $('#victoryAudio')[0].volume = 0.4;
        $('.victoryVoice')[0].play();
        let text = $('#battle_text').html();
        $('#battle_text').html(text + "<br>" + monster.name + "をたおした！");
        $('#monster_image').css('visibility', 'hidden');
        textScroll();

        //スコアを計算し表示
        score = Math.ceil(monster.hp * (correctCount/(correctCount+mistakeCount)) - (mistakeCount * mistakeDamage));

        $('#scoredis').css('display', 'block');
        $('#press_enter').css('display', 'block');
        $('#scoredis').html("スコア： " + score + "点<hr>正タイプ数： " + correctCount + "<br>ミスタイプ数： " + mistakeCount);

        //値の初期化
        currentChar = 0;
        // random = 0;
        charNum = 0;

        status = 3;
    }

    //敗北処理
    function gameover(){
        //モンスター攻撃カウントと問題文を非表示にする
        $('#count').css('display', 'none');
        $('#word').css('display', 'none');
        $('#word_kana').css('display', 'none');
        $('#word_romaji').css('display', 'none');

        //戦闘BGMを停止し、敗北BGMを流す
        $('#battleAudio')[0].pause();
        $('#loseAudio')[0].play();
        $('#loseAudio')[0].volume = 0.4;
        $('.loseVoice')[0].play();

        //敗北テキストの表示
        let text = $('#battle_text').html();
        $('#battle_text').html(text + "<br>" + monster.name + "にやぶれた・・・");

        //プレイヤー画像を非表示にする
        $('#player_image').css('visibility', 'hidden');
        textScroll();

        status = 4;
    }

    function addExp() {
        //経験値獲得処理
        $('#battle_text').html($('#battle_text').html() + "<br>" + user.name + "は " + monster.exp + " の経験値を得た");
        textScroll();
        //ドロップ判定
        judgeDrop = parseInt(Math.random() * 5);
        if(judgeDrop == 0) {
            player.get_item = dropItem.id;
        }else {
            player.get_item = "";
        }

        //レベルアップ判定とアイテムドロップ判定
        if(player.next_exp <= monster.exp) {
            displayEnter = 1;
        }else if(judgeDrop == 0) {
            player.next_exp -= monster.exp;
            displayEnter = 4;
        }else {
            player.next_exp -= monster.exp;
            displayEnter = 5;
        }
    }

    function levelUp() {
        let getExp = monster.exp;
        player.exp += getExp;

        for(let i = player.level; i < nextExpTable.length; i++) {

            if(getExp < player.next_exp) {
                player.next_exp -= getExp;
                player.level += levelUpCount;
                bonusPoint = levelUpCount;
                break;
            }

            getExp -= player.next_exp;
            player.next_exp = nextExpTable[i+1];
            levelUpCount++;
        }

        console.log(player.level)

        $('#battle_text').html($('#battle_text').html() + "<br>" + user.name + "は  レベル " + player.level + " に上がった！");
        textScroll();

        displayEnter = 2;
    }

    function addStatusSelect() {
        let growHp = 0;
        for(let i = 0; i < levelUpCount; i++) {
            growHp += parseInt(Math.random() * 5 + 5);
        }

        player.hp += growHp;
        $('#battle_text').html($('#battle_text').html() + "<br>さいだいHPが " + growHp + " 上がった！<br>成長させるステータスを選んでください  ボーナスポイント残り "
            + bonusPoint + "<br>HP(" + player.hp + "->" + (player.hp + 10) + ")：1ボタン　攻撃力(" + player.attack + "->" + (player.attack + 1)
            + ")：2ボタン　防御力(" + player.defence + "->" + (player.defence + 1) + ")：3ボタン");
        textScroll();

        displayEnter = 3;
    }

    function addHp() {
        player.hp += 10;
        $('#battle_text').html($('#battle_text').html() + "<br>さらに、さいだいHPが 10 上がった！");
        textScroll();
        bonusPoint--;

        if(bonusPoint == 0 && judgeDrop == 0) {
            displayEnter = 4;
        }else if(bonusPoint == 0) {
            displayEnter = 5;
        }else {
            $('#battle_text').html($('#battle_text').html() + "<br>成長させるステータスを選んでください  ボーナスポイント残り "
            + bonusPoint + "<br>HP(" + player.hp + "->" + (player.hp + 10) + ")：1ボタン　攻撃力(" + player.attack + "->" + (player.attack + 1)
            + ")：2ボタン　防御力(" + player.defence + "->" + (player.defence + 1) + ")：3ボタン");
            textScroll();
        }
    }

    function addAttack() {
        player.attack++;
        $('#battle_text').html($('#battle_text').html() + "<br>さらに、攻撃力が 1 上がった！");
        textScroll();
        bonusPoint--;

        if(bonusPoint == 0 && judgeDrop == 0) {
            displayEnter = 4;
        }else if(bonusPoint == 0) {
            displayEnter = 5;
        }else {
            $('#battle_text').html($('#battle_text').html() + "<br>成長させるステータスを選んでください  ボーナスポイント残り "
            + bonusPoint + "<br>HP(" + player.hp + "->" + (player.hp + 10) + ")：1ボタン　攻撃力(" + player.attack + "->" + (player.attack + 1)
            + ")：2ボタン　防御力(" + player.defence + "->" + (player.defence + 1) + ")：3ボタン");
            textScroll();
        }
    }

    function addDefence() {
        player.defence ++;
        $('#battle_text').html($('#battle_text').html() + "<br>さらに、防御力 1 上がった！");
        textScroll();
        bonusPoint--;

        if(bonusPoint == 0 && judgeDrop == 0) {
            displayEnter = 4;
        }else if(bonusPoint == 0) {
            displayEnter = 5;
        }else {
            $('#battle_text').html($('#battle_text').html() + "<br>成長させるステータスを選んでください  ボーナスポイント残り "
            + bonusPoint + "<br>HP(" + player.hp + "->" + (player.hp + 10) + ")：1ボタン　攻撃力(" + player.attack + "->" + (player.attack + 1)
            + ")：2ボタン　防御力(" + player.defence + "->" + (player.defence + 1) + ")：3ボタン");
            textScroll();
        }
    }

    function itemDrop() {

        $('#battle_text').html($('#battle_text').html() + "<br>" + dropItem.name + " を手に入れた！");
        textScroll();

        displayEnter = 5;
    }

    function battleFinish() {
        $('#battle_text').html($('#battle_text').html() + "<br>データを保存しています・・・");
        textScroll();

        $('#press_enter').css('display', 'none');

        $.ajax({
            url: '/setdata',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(
                player,
            ),
        })
        .done(function(response) {
            console.log(response)
        });
    }
});
