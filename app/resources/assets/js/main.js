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
    "りゃ":["rya","rixya","rilya"],"りゅ":["ryu","rixyu","rilyu"],"りょ":["ryo","rixyo","rilyo"],
    "ー":["-"]," ":[" "],"、":[","],"？":["?"],"！":["!"],"。":["."],
    "っ":["xtu","ltu","xtsu","ltsu"],
    "ぁ":["xa","la"],
    "ぇ":["xe","le"],
    "ゃ":["lya","xya"],"ゅ":["xyu","lyu"],"ょ":["lyo","xyo"],
    "a":"a","b":"b","c":"c","d":"d","e":"e","f":"f","g":"g","h":"h","i":"i","j":"j","k":"k","l":"l","m":"m","n":"n",
    "o":"o","p":"p","q":"q","r":"r","s":"s","t":"t","u":"u","v":"v","w":"w","x":"x","y":"y","z":"z",
    "":"",",":","
}

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
    let monster = [];
    let dropItem = [];
    let user = [];
    let field = [];
    let havingItems = [];
    let equipItem = [];
    //勝利数を保持する変数
    let victoryCnt = 0;
    //フィールド解放フラグ
    let nextFieldFlag1 = 0;
    let nextFieldFlag2 = 0;
    let nextFieldFlag3 = 0;
    let nextFieldFlag4 = 0;
    //選択したフィールドの値を保持しておく変数
    let fieldData = new FormData();
    //現在の画面ステータスを管理する
    //0:フィールド選択中, 1:バトル開始前, 2:バトル中, 3:バトル勝利, 4:バトル敗北,またはバトル後の選択画面
    let status = 0;
    //勝利後のテキストスクロールに利用
    let displayEnter = 0;
    //バトル開始前のカウントダウン用
    let readyTime = 3;
    //questionsの各値を格納しておく変数
    let words = [];
    let wordsKana = [];
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
    let judgeHaving;
    let timeRemaining;
    let attackTimer;
    //バトル後のテキスト処理時にEnterキーが連打されるのを防ぐ為の変数
    let judgeEnter = 0;
    let infoFlag = 0;



    //以下フィールド選択～バトル開始前の処理 status=0

    //フィールドを選択した際の処理
    $('.field_btn').on('click', function(e) {
        e.preventDefault();


        $('#battle_text').append("<br>" + "通信中・・・")

        fieldData.append('field_id', $(this).val());

        getData();
    });

    //バトルを開始するのに必要なデータを取得する
    function getData() {
        $.ajax({
            url: '/getdata',
            type: 'POST',
            data: fieldData,
        })
        .done(function(response) {
            //各値を保持する
            questions = response.questions;
            player = response.player;
            user = response.user;
            field = response.field;
            havingItems = response.having_items;
            equipItem = response.equip_item;

            //各値のセット
            $('.player_name').text(user.name);
            $('.player_level').text(player.level);
            $('#player_hp').text(player.hp);
            
            let number;
            victoryCnt = victoryCount();
            if(victoryCnt < 5) {
                number = parseInt(Math.random() * victoryCnt);
            }else {
                number = parseInt(Math.random() * 5);
            }
            
            monster = response.monsters[number];
            dropItem = response.dropItems[number];

            $('.monster_name').text(monster.name);
            $('#monster_hp').text(monster.hp);

            //プレイヤーのステータス設定処理
            setPlayerStatus();
            
            if(player.player_image == 1) {
                $('.player_image').attr('src', '/images/player_images/主人公男h150.png');
            }else {
                $('.player_image').attr('src', '/images/player_images/主人公女h150.png');
            }

            $('.monster_image').attr('src', '/images/monster_images/' + monster.image);

            $('.rpg_display').css('background-image', 'url(/images/field_images/' + field.image + ')');

            $('.select_field_display').hide();
            $('#battle_text').html(monster.name + 'があらわれた！' + "<br>" + 'BATTLE STARTボタンをクリック または スペースキーを押して戦闘開始' + "<br>" + '※ サウンドが流れます');
            $('#battle_btn').show();
            $('#monster_image').css('visibility', 'visible');
            $('#player_image').css('visibility', 'visible');

            status = 1;
        })
        .fail(function(response) {
            console.log(response);
            $('#battle_text').append("<br>通信に失敗しました。");
            textScroll();
        })
    }

    //装備アイテムの有無により各ステータスを設定
    function setPlayerStatus() {

        if(equipItem == null) {
            $('.attack').text(player.attack);
            $('.item_attack').text(0);
            $('.defence').text(player.defence);
            $('.item_defence').text(0);
            $('.mistake_damage').text(1);
            $('.equipment_image').attr('src', '');

            if((monster.attack - monster.min_attack) < player.defence) {
                damage = monster.min_attack;
            }else {
                damage = monster.attack - player.defence;
            }
            strike = player.attack;
            mistakeDamage = 1;
        }else {
            $('.attack').text(player.attack + equipItem.attack);
            $('.item_attack').text(equipItem.attack);
            $('.defence').text(player.defence + equipItem.defence);
            $('.item_defence').text(equipItem.defence);
            $('.mistake_damage').text(equipItem.mistake_damage);
            $('.equipment_image').attr('src', '/images/item_images/'+equipItem.image);

            if((monster.attack - monster.min_attack) < (player.defence + equipItem.defence)) {
                damage = monster.min_attack;
            }else {
                damage = monster.attack - (player.defence + equipItem.defence);
            }
            strike = player.attack + equipItem.attack;
            mistakeDamage = equipItem.mistake_damage;
        }
    }



    //以下バトル開始前の処理 status=1

    //BATTLE STARTボタンを押した際の処理
    $('#battle_btn').on('click', function() {
        $('#battle_btn').hide();
        $('.select_field_display').hide();
        $('.equipment_display').hide();
        $('#selectAudio')[0].play();
        ready();
    });

    //バトル準備
    function ready() {
        readyTime = 3;
        //問題の出題準備
        for(let i = 0; i < questions.length; i++) {
            words.push(questions[i].word);
            wordsKana.push(questions[i].word_kana);
        }

        $('#ready_count').show();
        $('#ready_count').text(readyTime);
        //ゲーム開始カウントダウン
        let readyTimer = setInterval(function(){
            $('#ready_count').text(readyTime);
            readyTime--;
            if(readyTime < 0){
                clearInterval(readyTimer);
                readyTime = 3;
                $('#change_equipment_btn').prop('disabled', true);
                $('#change_equipment_btn').css('color', 'lightgray');
                $('#change_field_btn').prop('disabled', true);
                $('#change_field_btn').css('color', 'lightgray');
                gameStart();
            }
        }, 1000);
    }

    //バトル開始
    function gameStart() {
        $('#ready_count').hide();
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
        $('#count').show();
        monsterAttackCount();
        status = 2;
    }



    //以下バトル中の処理 status=2

    //出題処理
    function setQuestion() {
        //ランダムに出題を行う
        let number = parseInt( Math.random() * words.length );
        $('#word').show();
        $('#word').text(words[number]);
        if(field.id == 2 || field.id == 4) {
            $('#word_kana').text('');            
        }else {
            $('#word_kana').text(wordsKana[number]);
        }
        $('#word_kana').show();
        //ひらがな文字列を分割する
        separationKana = wordSeparation(wordsKana[number]);
        //分割したひらがな文字列をローマ字文字列に変換したものと、例外入力用の追加辞書を作成
        [separationRomaji, aditionalDict] = wordChangeRomaji(separationKana);

        $('#word_romaji').show();
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

    //分割した問題文をローマ字表記に変換する処理
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
                //aditionalListの初期化
                aditionalList = [];
            }
        }
        return [returnRomaji, returnAditionalDict];
    }

    //打キー対象のセット処理
    function charInsort(){
        currentChar = $('#word_romaji').text().charAt(charNum);
    }


    //バトル中のタイピング判定処理
    function typing(key) {
        let keyStr = key;

        if(keyStr == "Process") {
            return false;
        }

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
            if($('#monster_hp').text() <= 0) {
                $('#monster_hp').text(0);
                victory();
            }
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
            $('#battle_text').append("<br>タイプミス！" + user.name + "は " + mistakeDamage + " のダメージ！");
            if($('#player_hp').text() <= 0) {
                $('#player_hp').text(0);
                gameover();
            }
            textScroll();    
        }

        if(currentRomaji == "") {
            currentRomaji = separationRomaji.shift();
            currentStr = separationKana.shift();

            if(judgeTyping == "n" && (fieldData.id != 2 || field.id != 4)) {
                flagN = 1;
            }else {
                flagN = 0;
            }

            judgeTyping = "";
        }

        //次の問題の出題処理
        if($('#monster_hp').text() != 0 && $('#player_hp').text() != 0 && charNum == $('#word_romaji').text().length){
            charNum = 0;
            judgeTyping = [];
            finishRomaji = [];
            setQuestion();
        }
    }

    //モンスターの攻撃カウント処理
    function monsterAttackCount(){
        //timeRemaining変数にmonster.attack_intervalを代入する
        timeRemaining = monster.attack_interval;

        $('#count').html("モンスターの攻撃まであと <span class='time'>" + timeRemaining + "</span> 秒");

        clearInterval(attackTimer);
        //モンスターの攻撃カウントダウン処理
        attackTimer = setInterval(function(){
            if(parseInt($('#player_hp').text()) <= 0 || parseInt($('#monster_hp').text()) <= 0){
                return false;
            }

            if(status == 2) {
                timeRemaining--;
                $('#count').html("モンスターの攻撃まであと <span class='time'>" + timeRemaining + "</span> 秒");
                if(timeRemaining <= 0){
                    clearInterval(attackTimer);
                    //モンスター攻撃処理
                    monsterAttack();
                }
            }
        }, 1000);
    }

    //モンスターの攻撃処理
    function monsterAttack() {
        //player.hpの減少処理
        $('#player_hp').html(parseInt($('#player_hp').text()) - damage);

        $('#attackAudio')[0].play();

        $('#battle_text').append("<br>" + monster.name + "の攻撃！主人公は " + damage + " のダメージ！");

        textScroll();

        if($('#player_hp').text() <= 0){
            $('#player_hp').text(0);
            gameover();
        }

        monsterAttackCount();
    }



    //以下バトル勝利～勝利後の処理 status=3

    //勝利処理
    function victory(){
        //モンスター攻撃カウントと問題文を非表示にする
        $('#count').hide();
        $('#word').hide();
        $('#word_kana').hide();
        $('#word_romaji').hide();
        
        //戦闘BGMを停止し、勝利BGMを流す
        $('#battleAudio')[0].pause();
        $('#battleAudio')[0].currentTime = 0;
        $('#victoryAudio')[0].play();
        $('#victoryAudio')[0].volume = 0.4;
        $('.victoryVoice')[0].play();
        $('#battle_text').append("<br>" + monster.name + "をたおした！");
        $('#monster_image').css('visibility', 'hidden');
        textScroll();

        //スコアを計算し表示
        score = Math.ceil(monster.hp * (correctCount/(correctCount+mistakeCount)) - (mistakeCount * mistakeDamage));

        //勝利カウントを増やす
        switch(field.id) {
            case 1:
                player.field1_victory_count++;
                nextFieldFlag1 = 1;
                break;
            case 2:
                player.field2_victory_count++;
                nextFieldFlag2 = 1;
                break;
            case 3:
                player.field3_victory_count++;
                nextFieldFlag3 = 1;
                break;
            case 4:
                player.field4_victory_count++;
                nextFieldFlag4 = 1;
                break;
            case 5:
                player.field5_victory_count++;
                break;
        }

        $('#scoredis').show();
        $('#press_enter').show();
        $('#scoredis').html("スコア： " + score + "点<hr>正タイプ数： " + correctCount + "<br>ミスタイプ数： " + mistakeCount);

        status = 3;
    }

    //経験値獲得処理
    function addExp() {
        $('#battle_text').append("<br>" + user.name + "は " + monster.exp + " の経験値を得た");
        textScroll();
        //ドロップ判定
        //ドロップアイテムを既に持っている場合はドロップしない
        let havingItemsId = [];
        for(let i = 0; i < havingItems.length; i++) {
            havingItemsId.push(havingItems[i].id);
        }
        judgeHaving = $.inArray(dropItem.id, havingItemsId);

        if(judgeHaving < 0) {
            judgeDrop = parseInt(Math.random() * 5);
        }else {
            judgeDrop = 1;
        }

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

    //レベルアップ処理
    function levelUp() {
        let getExp = monster.exp;
        player.exp += getExp;

        for(let i = player.level; ; i++) {

            if(getExp < player.next_exp) {
                player.next_exp -= getExp;
                player.level += levelUpCount;
                bonusPoint = levelUpCount;
                break;
            }

            getExp -= player.next_exp;
            player.next_exp = nextExp(i);
            levelUpCount++;
        }

        $('#battle_text').append(`<br>${user.name} は レベル <span style="color: yellow">${player.level}</span> に上がった！`);
        textScroll();

        displayEnter = 2;
    }

    //レベルアップ時のHP成長とボーナスポイントを振り分ける処理
    function addStatusSelect() {
        let growHp = 0;
        for(let i = 0; i < levelUpCount; i++) {
            growHp += parseInt(Math.random() * 5 + 5);
        }

        player.hp += growHp;
        $('#battle_text').append(`<br>さいだいHPが<span style="color: yellow"> ${growHp} </span>上がった！`);
        divideBonusPoint();

        $('#press_enter').hide();
        displayEnter = 3;
        levelUpCount = 0;
    }

    //ボーナスポイント振り分け選択処理
    function divideBonusPoint() {
        if(bonusPoint == 0) {
            $('#press_enter').show();

            if(judgeDrop == 0) {
                displayEnter = 4;
            }else {
                displayEnter = 5;
            }
        }else {
            $('#battle_text').append("<br>成長させるステータスを選んでください  ボーナスポイント残り "
            + bonusPoint + "<br>HP(" + player.hp + "→" + (player.hp + 10) + ")：1ボタン　攻撃力(" + player.attack + "→" + (player.attack + 1)
            + ")：2ボタン　防御力(" + player.defence + "→" + (player.defence + 2) + ")：3ボタン");
            textScroll();
        }
    }

    //HP成長を選んだ際の処理
    function addHp() {
        player.hp += 10;
        $('#battle_text').append("<br>さらに、さいだいHPが<span style='color: yellow'> 10 </span>上がった！");
        textScroll();
        bonusPoint--;

        divideBonusPoint();
    }

    //攻撃力成長を選んだ際の処理
    function addAttack() {
        player.attack++;
        $('#battle_text').append("<br>さらに、攻撃力が<span style='color: yellow'> 1 </span>上がった！");
        textScroll();
        bonusPoint--;

        divideBonusPoint();
    }

    //防御力成長を選んだ際の処理
    function addDefence() {
        player.defence += 2;
        $('#battle_text').append("<br>さらに、防御力が<span style='color: yellow'> 2 </span>上がった！");
        textScroll();
        bonusPoint--;

        divideBonusPoint();
    }

    //アイテム獲得処理
    function itemDrop() {

        $('#battle_text').append("<br><span style='color: lime'>" + dropItem.name + " </span>を手に入れた！");
        textScroll();

        displayEnter = 5;
    }

    //勝利後のデータを保存する処理
    function dataSave() {
        $('#battle_text').append("<br>データを保存しています・・・");
        textScroll();

        $.ajax({
            url: '/setdata',
            type: 'POST',
            dataType: 'text',
            contentType: "application/json",
            data: JSON.stringify(
                player,
            ),
        })
        .done(function() {
            $('#battle_text').append("<br>データを保存しました。");
            if(player.field1_victory_count == 5 && nextFieldFlag1 == 1) {
                $('#battle_text').append("<br>新たなフィールド <span style='color: yellow'>森林地帯</span> が解放されました！");
                releaseField();
            }else if(player.field2_victory_count == 5 && nextFieldFlag2 == 1) {
                $('#battle_text').append("<br>新たなフィールド <span style='color: yellow'>荒野地帯</span> が解放されました！");
                releaseField();
            }else if(player.field3_victory_count == 5 && nextFieldFlag3 == 1) {
                $('#battle_text').append("<br>新たなフィールド <span style='color: yellow'>山岳地帯</span> が解放されました！");
                releaseField();
            }else if(player.field4_victory_count == 5 && nextFieldFlag4 == 1) {
                $('#battle_text').append("<br>新たなフィールド <span style='color: yellow'>魔界</span> が解放されました！");
                releaseField();
            }
            textScroll();
            displayEnter = 0;
            status = 4;
            judgeEnter = 0;
        })
        .fail(function(response) {
            console.log(response)
            $('#battle_text').append("<br>データの保存に失敗しました。");
            textScroll();
            judgeEnter = 0;
        });

    }
    


    //以下バトル敗北処理

    //敗北処理
    function gameover(){
        //モンスター攻撃カウントと問題文を非表示にする
        $('#count').hide();
        $('#word').hide();
        $('#word_kana').hide();
        $('#word_romaji').hide();

        //戦闘BGMを停止し、敗北BGMを流す
        $('#battleAudio')[0].pause();
        $('#battleAudio')[0].currentTime = 0;
        $('#loseAudio')[0].play();
        $('#loseAudio')[0].volume = 0.4;
        $('.loseVoice')[0].play();

        //敗北テキストの表示
        $('#battle_text').append("<br>" + monster.name + "にやぶれた・・・");

        $('#press_enter').show();

        //プレイヤー画像を非表示にする
        $('#player_image').css('visibility', 'hidden');
        textScroll();

        player.get_item = "";
        status = 4;
    }



    //以下バトル終了後の次の行動を選択する処理 status=4

    //次の行動を選択する処理
    function selectNextAction() {
        $('#press_enter').hide();
        $('#scoredis').hide();

        $('#battle_text').append("<br>次の行動を選択してください。");
        textScroll();

        $('.select_next_action').css('display', 'flex');

        battleInit();
    }

    //次のバトルを選択した際の処理
    $('#next_battle').on('click', function() {
        $('.select_next_action').hide();
        $('.select_field_display').hide();
        $('.equipment_display').hide();
        getData();
    });

    //フィールドの変更を選択した際の処理
    $('#change_field').on('click', function() {
        $('#change_field_btn').trigger('click');
    })

    //装備の変更ボタンを選択した際の処理
    $('#change_equipment').on('click', function() {
        $('#change_equipment_btn').trigger('click');
    });



    //以下システム処理やメインページの各ボタンを押した際の処理

    //バトル中に使用した変数を初期化
    function battleInit() {
        //各変数の初期化
        questions = [];
        monster = [];
        dropItem = [];
        user = [];
        field = [];
        havingItems = [];
        status = 0;
        displayEnter = 0;
        readyTime = 3;
        words = [];
        wordsKana = [];
        separationKana = [];
        separationRomaji = [];
        aditionalDict = [];
        correctCount = 0;
        mistakeCount = 0;
        score = 0;
        judgeTyping = [];
        finishRomaji = [];
        flagN = 0;
        levelUpCount = 0;
        bonusPoint = 0;
        currentChar = "";
        charNum = 0;
        timeRemaining = 0;
        nextFieldFlag1 = 0;
        nextFieldFlag2 = 0;
        nextFieldFlag3 = 0;
        nextFieldFlag4 = 0;
        $('#change_equipment_btn').prop('disabled', false);
        $('#change_equipment_btn').css('color', 'white');
        $('#change_field_btn').prop('disabled', false);
        $('#change_field_btn').css('color', 'white');
    }

    //statusの値によってキーボードを押した際の動作を分ける
    $('body').on('keydown', function(e) {

        //バトル開始前
        if(status == 1 && e.key == ' ') {
            if(infoFlag == 1) {
                return false;
            }
            $('#battle_btn').trigger('click');
        }

        //バトル中
        if(status == 2) {
            if(infoFlag == 1) {
                return false;
            }

            if(e.key == "Escape") {
                $('#battle_reset').trigger('click');
            }else {
                typing(e.key);
            }
        }

        //バトル勝利後
        if(status == 3 && displayEnter == 3) {
            if(infoFlag == 1) {
                return false;
            }

            if(e.key == 1) {
                addHp();
            }else if(e.key == 2) {
                addAttack();
            }else if(e.key == 3) {
                addDefence();
            }else if(e.key == "Enter"){
                return false;
            }
        }

        if(status == 3 && e.key == "Enter") {
            if(judgeEnter == 1 || infoFlag == 1) {
                return false;
            }

            if(displayEnter == 0) {
                addExp();
            }else if(displayEnter == 1) {
                levelUp();
            }else if(displayEnter == 2) {
                addStatusSelect();
            }else if(displayEnter == 4) {
                itemDrop();
            }else {
                judgeEnter = 1;
                dataSave();
            }
        }

        //バトル敗北または勝利後の経験値取得やレベルアップ処理後
        if(status == 4 && e.key == "Enter") {
            selectNextAction();
        }
    });


    //所持アイテム一覧の取得と表示処理
    function getHavingItem() {
        $.ajax({
            url: '/getitem',
            type: 'POST',
        })
        .done(function(response) {
            havingItems = response.items;
            equipItem = response.equip_item;
            let i;
            let html = "";
            
            for(i = 0; i < havingItems.length; i++) {
                html += `<li class="having_item" data-id="${havingItems[i].id}">
                            <div class="item_image">
                                <img src="/images/item_images/${havingItems[i].image}" alt="${havingItems[i].name}">
                                <p>${havingItems[i].name}</p>
                            </div>
                            <div class="item_detail">
                                <p><i class="far fa-hand-rock"></i>：<span>${havingItems[i].attack}</span></p>
                                <p><i class="fas fa-shield-alt"></i>：<span>${havingItems[i].defence}</span></p>
                                <p><i class="far fa-tired"></i>：<span>${havingItems[i].mistake_damage}</span></p>
                            </div>
                        </li>`;
            }

            $('.having_items_list').empty().append(html);
            setEquip();
            
            $('.equipment_display').show();
            $('#battle_text').append("<br>装備するアイテムを選択してください。");
        })
        .fail(function(response) {
            console.log(response)
            $('#battle_text').append("<br>データの取得に失敗しました。");
            textScroll();
        });
    }

    //装備中のアイテムをオレンジの枠で囲む処理
    function setEquip() {
        $('.equip').removeClass('equip');

        if(equipItem != null) {
            $('.having_item').filter(function() {
                return($(this).data('id') == equipItem.id);
            })
            .addClass('equip');
        }
    }

    //所持アイテムの装備着脱処理
    $(document).on('click', '.having_item', function() {
        let itemId = {'id': $(this).data('id')}

        if(equipItem != null && equipItem.id == itemId.id) {
            itemId = {'id': ''};
        }else {
            itemId = {'id': $(this).data('id')};
        }

        $.ajax({
            url: '/setitem',
            type: 'POST',
            contentType: "application/json",
            data: JSON.stringify(
                itemId,
            ),
        })
        .done(function(response) {
            //equipItemの書き換え
            equipItem = response.item;
            //プレイヤーステータスの書き換え
            setPlayerStatus();

            if(equipItem != null) {
                $('#battle_text').append("<br>" + equipItem.name + " を装備しました。");
            }else {
                $('#battle_text').append("<br>装備を外しました。");
            }

            setEquip();
            textScroll();
        })
        .fail(function(response) {
            console.log(response);
            $('#battle_text').append("<br>通信に失敗しました。");
            textScroll();
        });
    });

    //装備選択画面を閉じる
    $('.close_equipment').on('click', function() {
        $('.equipment_display').hide();
    });

    $('#change_equipment_btn').on('click', function() {
        $('#battle_text').append("<br>所持アイテムを取得中・・・");
        textScroll();

        getHavingItem();
    });

    //ヘッダーのフィールド変更ボタンを押した際の処理
    $('#change_field_btn').on('click', function() {
        $('.select_next_action').hide();
        $('.equipment_display').hide();
        $('#battle_btn').hide();
        $('.select_field_display').show();
        fieldData = new FormData();

        $('#battle_text').html("フィールドを選択してください。");
        status = 0;
    });

    //ヘッダーのバトルのリセットボタンを押した際の処理
    $('#battle_reset').on('click', function() {
        if(status != 2) {
            return false;
        }
        clearInterval(attackTimer);
        $('#change_equipment_btn').prop('disabled', false);
        $('#change_equipment_btn').css('color', 'white');
        $('#change_field_btn').prop('disabled', false);
        $('#change_field_btn').css('color', 'white');
        $('#count').hide();
        $('#word').hide();
        $('#word_kana').hide();
        $('#word_romaji').hide();
        $('#battleAudio')[0].pause();
        $('#battleAudio')[0].currentTime = 0;
        $('#player_hp').text(player.hp);
        $('#monster_hp').text(monster.hp);
        $('#battle_text').html("バトルをリセットしました。<br>BATTLE STARTボタンをクリック または スペースキーを押して戦闘開始");
        $('#battle_btn').show();
        correctCount = 0;
        mistakeCount = 0;
        currentChar = "";
        charNum = 0;
        judgeTyping = [];
        finishRomaji = [];
        timeRemaining = 0;

        status = 1;
    });

    //インフォメーションボタンを押した際の処理
    $('#show_info').on('click', function() {
        $('#game_tab').prop('checked', true);
        infoFlag = 1;
        //インフォメーションモーダルを開く
        $('.info_modal').show();
    })

    //インフォメーションモーダルを閉じる処理
    $('.modal_close').on('click', function() {
        infoFlag = 0;
        $('.info_modal').hide();
    })

    //新たなフィールドを解放する処理
    function releaseField() {
        if(player.field1_victory_count >= 5) {
            $('#field2').removeClass('not_select');
            $('#field2').prop('disabled', false);
        }
        if(player.field2_victory_count >= 5) {
            $('#field3').removeClass('not_select');
            $('#field3').prop('disabled', false);
        }
        if(player.field3_victory_count >= 5) {
            $('#field4').removeClass('not_select');
            $('#field4').prop('disabled', false);
        }
        if(player.field4_victory_count >= 5) {
            $('#field5').removeClass('not_select');
            $('#field5').prop('disabled', false);
        }
    }

    //選択したフィールドでの勝利数を返す
    function victoryCount() {
        switch(field.id) {
            case 1:
                return player.field1_victory_count;
            case 2:
                return player.field2_victory_count;
            case 3:
                return player.field3_victory_count;
            case 4:
                return player.field4_victory_count;
            case 5:
                return player.field5_victory_count;
        }
    }

    //経験値テーブルの計算処理
    function nextExp(currentLv) {
        let returnExp = 0;
        if(currentLv >= 40) {
            returnExp = (currentLv - 40) * 10 + 160;
        }else if(currentLv < 40 && currentLv >= 20) {
            returnExp = (currentLv - 20) * 5 + 60;
        }else {
            returnExp = (currentLv + 1) * 3;
        }

        return returnExp;
    }

    //テキストを最下部へ自動スクロールする処理
    function textScroll(){
        battle_text.scroll(0, battle_text.scrollHeight);
    }
});
