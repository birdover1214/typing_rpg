<div class="info_modal">
    <span class="modal_close">×</span>
    <div class="info_tab">
        <input type="radio" name="info_tab" id="game_tab" aria-controls="game_info" checked>
        <label for="game_tab">ゲームの進め方</label>
        <input type="radio" name="info_tab" id="field_tab" aria-controls="field_info">
        <label for="field_tab">フィールド選択画面</label>
        <input type="radio" name="info_tab" id="battle_tab" aria-controls="battle_info">
        <label for="battle_tab">バトル画面</label>
        <input type="radio" name="info_tab" id="equipment_tab" aria-controls="equipment_info">
        <label for="equipment_tab">装備選択画面</label>
        <input type="radio" name="info_tab" id="credit_tab" aria-controls="credit_info">
        <label for="credit_tab">クレジット</label>
        <div class="info_tabpanels">
            <div id="game_info" class="info_tabpanel">
                <h2>ゲームの進め方</h2>
                <p>
                    TypingRPGをプレイしていただきありがとうございます。<br><br>
                    TypingRPGはタイピングによる攻撃でモンスターを倒し、レベルを上げたり装備を整えたりしながら<br>
                    より強いモンスターを倒していくローマ字入力用のタイピングゲームです。<br>
                    基本的な流れは<br><br>
                    (1)バトルをしたいフィールドの選択<br>
                    <span class="arrow_down">↓</span><br>
                    (2)モンスターとバトル<br>
                    <span class="arrow_down">↓</span><br>
                    (3)勝利または敗北　※敗北した場合は(5)へ進む<br>
                    <span class="arrow_down">↓</span><br>
                    (4)経験値やアイテムの獲得<br>
                    <span class="arrow_down">↓</span><br>
                    (5)次の行動の選択(フィールド変更や装備変更)<br><br>
                    となります。<br>
                    フィールド選択やバトルなどの詳細は各種タブをご覧ください。<br><br>
                    <span style="color: red">※　Twitterで新規登録を行った方は初期パスワードが「password」に設定されています。<br>
                    ヘッダー中央右側にある「ユーザー情報」からパスワードの変更が行えますので変更してご利用ください。</span>
                </p>
            </div>
            <div id="field_info" class="info_tabpanel">
                <h2>フィールド選択画面</h2>
                <p>
                    ゲームの開始画面は以下の画面からスタートします。<br><br>
                    <img class="info_image_w300" src="{{ asset('/images/system_images/fieldw300.png') }}" alt="フィールド選択画面"><br>
                    <span class="image_name">フィールド選択画面</span><br><br>
                    各フィールドを選択するとバトル画面へ移行します。<br>
                    ？マークのついているフィールドは初期状態では解放されておらず<br>
                    一定回数バトルに勝利することで解放されていきます。<br>
                    <br>
                    各フィールドには複数体のモンスターが潜んでおり、新しく解放されたフィールドで初めてバトルを行う場合は<br>
                    選択したフィールド内で最も弱いモンスターに必ず遭遇します。<br>
                    新しいフィールドのモンスターが強すぎると感じた場合は、前のフィールドでレベル上げや装備品を獲得して<br>
                    再度挑戦してみましょう。<br><br>
                    <span style="color: red">※ フィールド「山岳地帯」では英語の慣用句が問題文として出題されます。<br><br>
                    例)Every medal has two sides<br><br>
                    先頭の「E」は小文字でタイプしてください。また、単語と単語の間のスペースは<br>
                    スペースキーをタイプしてください。</span>
                </p>
            </div>
            <div id="battle_info" class="info_tabpanel">
                <h2>バトル画面</h2>
                <p>
                    <span class="info_head">バトル中のステータス</span><br><br>
                    <img class="info_image_w400" src="{{ asset('/images/system_images/statusw400.png') }}" alt="ステータス画面"><br>
                    <span class="image_name">バトル画面のステータス部分</span><br><br>
                    画像左側に表示されているアイコンは<br><br>
                    <i class="far fa-hand-rock"></i>が攻撃力になります。<br>
                    左側の 35 がプレイヤー自身の攻撃力と装備アイテムの攻撃力を足した数値で、<br>
                    右側の (25) が装備アイテムの攻撃力になります。<br>
                    左側の数値の分だけ正解1タイプ毎にモンスターへダメージを与えます。<br><br>
                    <i class="fas fa-shield-alt"></i>が防御力になります。<br>
                    左側の 13 がプレイヤー自身の防御力と装備アイテムの防御力を足した数値で、<br>
                    右側の (9) が装備アイテムの防御力になります。<br>
                    左側の数値の分だけモンスターからの被ダメージを抑える事ができますが<br>
                    モンスターには最低攻撃力という数値が設定されており、防御力を上げても<br>
                    最低攻撃力の数値分のダメージは受けてしまいます。<br><br>
                    <i class="far fa-tired"></i>がタイプミス時のダメージになります。<br>
                    この数値は、アイテムを装備している場合は、その装備アイテムに設定されている<br>
                    タイプミスダメージの数値になり、アイテムを装備していない場合は 1 になります。<br>
                    タイプミスをしてしまった場合、この数値の分だけダメージを受けます。<br><br>
                    画像中央部分に表示されているのはプレイヤー名、プレイヤーレベル、現在のHPになります。<br>
                    画像右側部分に表示されているのはモンスター名、モンスターの現在のHPになります。<br><br>
                    モンスターのHPを0にすると勝利となり、プレイヤーのHPが0になると敗北になります。<br><br>
                    <span class="info_head">バトル画面</span><br><br>
                    <img class="info_image_w400" src="{{ asset('/images/system_images/battle1w400.png') }}" alt="バトル画面"><br>
                    <span class="image_name2">バトル画面</span><br><br>
                    画像左側部分に表示されているのは現在装備しているアイテムになります。<br>
                    画像中央部分に表示されているのはプレイヤーキャラクターになります。<br>
                    画像右側部分に表示されているのはモンスターになります。<br><br>
                    <span class="info_head">タイピング画面</span><br><br>
                    <img class="info_image_w400" src="{{ asset('/images/system_images/typingw400.png') }}" alt="タイピング画面"><br>
                    <span class="image_name3">タイピング画面</span><br><br>
                    画像上部に表示されているのはモンスターの攻撃猶予時間になります。<br>
                    この値はモンスター毎に異なり、カウントが0になると攻撃されます。<br><br>
                    画像中央部分の「花鳥風月」が問題文で、「かちょうふうげつ」がかな表示の問題文になります。<br>
                    かな表示部分は出題傾向が英語のフィールドでは表示されません。<br><br>
                    画像下部に表示されているのはローマ字表示の問題文になります。<br>
                    正解タイプをした部分は文字が赤くなります。また、複数パターンの入力にも対応しています。<br><br>
                    例) 「ちょ」とタイプする場合 → tyo,cho,cyo,tixyo,tilyo,chixyo,chilyo<br><br>
                    上記のいずれのパターンでも正解になります。<br><br>
                    <span class="info_head">経験値獲得とレベルアップ</span><br><br>
                    <img class="info_image_w400" src="{{ asset('/images/system_images/lvup1w400.png') }}" alt="経験値獲得とレベルアップ画面"><br>
                    <img class="info_image_w400" src="{{ asset('/images/system_images/lvup2w400.png') }}" alt="経験値獲得とレベルアップ画面"><br>
                    <span class="image_name">経験値獲得とレベルアップ画面</span><br><br>
                    バトルに勝利すると経験値を獲得でき、一定の経験値が蓄積するとプレイヤーのレベルがアップします。<br>
                    レベルアップすると最大HPが増加し、ボーナスポイントが付与されます。<br>
                    ボーナスポイントを自由に振り分けてキャラクターを成長させましょう。<br><br>
                    <span class="info_head">バトルのリセット</span><br><br>
                    バトル中のみ「バトルリセット」ボタンが押せるようになります。<br>
                    現在バトルを行っているモンスターとの戦闘開始前の状態に戻すことがでます。<br>
                    「Esc」キーでも同様にバトルリセットが行えます。
                </p>
            </div>
            <div id="equipment_info" class="info_tabpanel">
                <h2>装備選択画面</h2>
                <p>
                    <span class="info_head">装備の変更</span><br><br>
                    <img class="info_image_w400" src="{{ asset('/images/system_images/itemw400.png') }}" alt="装備選択画面"><br>
                    <span class="image_name3">装備選択画面</span><br><br>
                    装備変更ボタンを押すと獲得済みの装備アイテムが一覧表示されます。<br>
                    装備したいアイテムをクリックすることで装備でき、装備中のアイテムはオレンジ色の枠で囲まれます<br>
                    また、装備を外したい場合は装備中のアイテムをクリックすることで外すことができます。<br><br>
                    ※ 装備の変更はバトル中は行えません。<br><br>
                    各アイテム画像の右側に表示されているアイコンは<br>
                    <i class="far fa-hand-rock"></i>が攻撃力を表し、アイテムの攻撃能力になります。<br>
                    <i class="fas fa-shield-alt"></i>が防御力を表し、アイテムの防御能力になります。<br>
                    <i class="far fa-tired"></i>がタイプミス時にプレイヤーが受けるダメージを表します。<br><br>
                    <span class="info_head">アイテムドロップに関して</span><br><br>
                    モンスターはそれぞれ1種類のアイテムを所持しています。<br>
                    <span style="color: red">一度アイテムをドロップしたモンスターは以降のバトルではアイテムをドロップしません。</span>
                </p>
            </div>
            <div id="credit_info" class="info_tabpanel">
                <h2>クレジット</h2>
                <p>
                    この作品の製作には、下記サイトの素材を使用させていただきました。<br><br>
                    <span class="info_head">BGM・効果音・ボイス素材</span><br><br>
                    魔王魂様<br>
                    <a href="https://maoudamashii.jokersounds.com" target="_blank" rel="noopener">フリー音楽素材/魔王魂</a><br><br>
                    効果音ラボ様<br>
                    <a href="https://soundeffect-lab.info" target="_blank" rel="noopener">https://soundeffect-lab.info</a><br><br>
                    <span class="info_head">画像素材</span><br><br>
                    七三ゆきのアトリエ様<br>
                    <a href="https://nanamiyuki.com/" target="_blank" rel="noopener">https://nanamiyuki.com/</a>
                </p>
            </div>
        </div>
    </div>
</div>
