    import React from 'react';

    const Country_dd = (props) => {

    return (
        <div className='cn_dd'>
        <a href="/" className={props.country_ext === "" ? "mactive" : ""} title="USA"><b className="gss_img flag-us"></b>USA</a>
        <a href="/en-sg" className={props.country_ext === "en-sg" ? "mactive" : ""} title="Singapore"><b className="gss_img flag-sg"></b>Singapore</a>
        <a href="/zh-tw" className={props.country_ext === "zh-tw" ? "mactive" : ""} title="Taiwan"><b className="gss_img flag-tw"></b>Taiwan</a>
        <a href="/ja-jp" className={props.country_ext === "ja-jp" ? "mactive" : ""} title="Japan"><b className="gss_img flag-jp"></b>Japan</a>
        <a href="/zh-hk" className={props.country_ext === "zh-hk" ? "mactive" : ""} title="Hong Kong"><b className="gss_img flag-hk"></b>Hong Kong</a>
        <a href="/ko-kr" className={props.country_ext === "ko-kr" ? "mactive" : ""} title="South Korea"><b className="gss_img flag-kr"></b>South Korea</a>
        <a href="/en-ph" className={props.country_ext === "en-ph" ? "mactive" : ""} title="Philippines"><b className="gss_img flag-ph"></b>Philippines</a>
        <a href="/en-th" className={props.country_ext === "en-th" ? "mactive" : ""} title="Thailand"><b className="gss_img flag-th"></b>Thailand</a>
        <a href="/en-gb" className={props.country_ext === "en-gb" ? "mactive" : ""} title="United Kingdom"><b className="gss_img flag-gb"></b>United Kingdom</a>
        <a href="/en-in" className={props.country_ext === "en-in" ? "mactive" : ""} title="India"><b className="gss_img flag-in"></b>India</a>
        <a href="/en-sl" className={props.country_ext === "en-sl" ? "mactive" : ""} title="Sri Lanka"><b className="gss_img flag-sl"></b>Sri Lanka</a>
        <a href="/en-za" className={props.country_ext === "en-za" ? "mactive" : ""} title="South Africa"><b className="gss_img flag-za"></b>South Africa</a>
        <a href="/en-au" className={props.country_ext === "en-au" ? "mactive" : ""} title="Australia"><b className="gss_img flag-au"></b>Australia</a>
        <a href="/en-ke" className={props.country_ext === "en-ke" ? "mactive" : ""} title="Kenya"><b className="gss_img flag-ke"></b>Kenya</a>
        <a href="/en-kw" className={props.country_ext === "en-kw" ? "mactive" : ""} title="Kuwait"><b className="gss_img flag-kw"></b>Kuwait</a>
        <a href="/ms-my" className={props.country_ext === "ms-my" ? "mactive" : ""} title="Malaysia"><b className="gss_img flag-my"></b>Malaysia</a>
        <a href="/en-nz" className={props.country_ext === "en-nz" ? "mactive" : ""} title="New Zealand"><b className="gss_img flag-nz"></b>New Zealand</a>
        <a href="/en-sa" className={props.country_ext === "en-sa" ? "mactive" : ""} title="Saudi Arabia"><b className="gss_img flag-sa"></b>Saudi Arabia</a>
        <a href="/en-tr" className={props.country_ext === "en-tr" ? "mactive" : ""} title="Turkey"><b className="gss_img flag-tr"></b>Turkey</a>
        <a href="/uk-ua" className={props.country_ext === "uk-ua" ? "mactive" : ""} title="Ukraine"><b className="gss_img flag-ua"></b>Ukraine</a>
        <a href="/en-ae" className={props.country_ext === "en-ae" ? "mactive" : ""} title="UAE"><b className="gss_img flag-ae"></b>UAE</a>
        <a href="/en-ca" className={props.country_ext === "en-ca" ? "mactive" : ""} title="Canada"><b className="gss_img flag-ca"></b>Canada</a>
        <a href="/hu-hu" className={props.country_ext === "hu-hu" ? "mactive" : ""} title="Hungary"><b className="gss_img flag-hu"></b>Hungary</a>
        <a href="/de-at" className={props.country_ext === "de-at" ? "mactive" : ""} title="Austria"><b className="gss_img flag-at"></b>Austria</a>
        <a href="/en-rs" className={props.country_ext === "en-rs" ? "mactive" : ""} title="Serbia"><b className="gss_img flag-rs"></b>Serbia</a>
        <a href="/de-ch" className={props.country_ext === "de-ch" ? "mactive" : ""} title="Switzerland"><b className="gss_img flag-ch"></b>Switzerland</a>
        <a href="/de-de" className={props.country_ext === "de-de" ? "mactive" : ""} title="Germany"><b className="gss_img flag-de"></b>Germany</a>
        <a href="/en-il" className={props.country_ext === "en-il" ? "mactive" : ""} title="Israel"><b className="gss_img flag-il"></b>Israel</a>
        <a href="/bg-bg" className={props.country_ext === "bg-bg" ? "mactive" : ""} title="Bulgaria"><b className="gss_img flag-bg"></b>Bulgaria</a>
        <a href="/fr-fr" className={props.country_ext === "fr-fr" ? "mactive" : ""} title="France"><b className="gss_img flag-fr"></b>France</a>
        <a href="/it-it" className={props.country_ext === "it-it" ? "mactive" : ""} title="Italy"><b className="gss_img flag-it"></b>Italy</a>
        <a href="/da-dk" className={props.country_ext === "da-dk" ? "mactive" : ""} title="Denmark"><b className="gss_img flag-dk"></b>Denmark</a>
        <a href="/sk-sk" className={props.country_ext === "sk-sk" ? "mactive" : ""} title="Slovakia"><b className="gss_img flag-sk"></b>Slovakia</a>
        <a href="/no-no" className={props.country_ext === "no-no" ? "mactive" : ""} title="Norway"><b className="gss_img flag-no"></b>Norway</a>
        <a href="/en-ie" className={props.country_ext === "en-ie" ? "mactive" : ""} title="Ireland"><b className="gss_img flag-ie"></b>Ireland</a>
        <a href="/es-es" className={props.country_ext === "es-es" ? "mactive" : ""} title="Spain"><b className="gss_img flag-es"></b>Spain</a>
        <a href="/hr-hr" className={props.country_ext === "hr-hr" ? "mactive" : ""} title="Croatia"><b className="gss_img flag-hr"></b>Croatia</a>
        <a href="/pl-pl" className={props.country_ext === "pl-pl" ? "mactive" : ""} title="Poland"><b className="gss_img flag-pl"></b>Poland</a>
        <a href="/lt-lt" className={props.country_ext === "lt-lt" ? "mactive" : ""} title="Lithuania"><b className="gss_img flag-lt"></b>Lithuania</a>
        <a href="/ro-ro" className={props.country_ext === "ro-ro" ? "mactive" : ""} title="Romania"><b className="gss_img flag-ro"></b>Romania</a>
        <a href="/lv-lv" className={props.country_ext === "lv-lv" ? "mactive" : ""} title="Latvia"><b className="gss_img flag-lv"></b>Latvia</a>
        <a href="/nl-nl" className={props.country_ext === "nl-nl" ? "mactive" : ""} title="Netherlands"><b className="gss_img flag-nl"></b>Netherlands</a>
        <a href="/ru-ru" className={props.country_ext === "ru-ru" ? "mactive" : ""} title="Russia"><b className="gss_img flag-ru"></b>Russia</a>
        <a href="/nl-be" className={props.country_ext === "nl-be" ? "mactive" : ""} title="Belgium"><b className="gss_img flag-be"></b>Belgium</a>
        <a href="/cs-cz" className={props.country_ext === "cs-cz" ? "mactive" : ""} title="Czech Republic"><b className="gss_img flag-cz"></b>Czech Republic</a>
        <a href="/el-gr" className={props.country_ext === "el-gr" ? "mactive" : ""} title="Greece"><b className="gss_img flag-gr"></b>Greece</a>
        <a href="/pt-pt" className={props.country_ext === "pt-pt" ? "mactive" : ""} title="Portugal"><b className="gss_img flag-pt"></b>Portugal</a>
        <a href="/sv-se" className={props.country_ext === "sv-se" ? "mactive" : ""} title="Sweden"><b className="gss_img flag-se"></b>Sweden</a>
        <a href="/es-mx" className={props.country_ext === "es-mx" ? "mactive" : ""} title="Mexico"><b className="gss_img flag-mx"></b>Mexico</a>
        <a href="/pt-br" className={props.country_ext === "pt-br" ? "mactive" : ""} title="Brazil"><b className="gss_img flag-br"></b>Brazil</a>
        <a href="/fi-fi" className={props.country_ext === "fi-fi" ? "mactive" : ""} title="Finland"><b className="gss_img flag-fi"></b>Finland</a>
        <a href="/zh-cn" className={props.country_ext === "zh-cn" ? "mactive" : ""} title="China"><b className="gss_img flag-cn"></b>China</a>
        <a href="/en-id" className={props.country_ext === "en-id" ? "mactive" : ""} title="Indonesia"><b className="gss_img flag-id"></b>Indonesia</a>
        <a href="/es-ar" className={props.country_ext === "es-ar" ? "mactive" : ""} title="Argentina"><b className="gss_img flag-ar"></b>Argentina</a>
        <a href="/es-cl" className={props.country_ext === "es-cl" ? "mactive" : ""} title="Chile"><b className="gss_img flag-cl"></b>Chile</a>
      </div>

    )
    }

    export default Country_dd;
