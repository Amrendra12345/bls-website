import React from 'react';

const Curr_list = (props) => {

    return (
        <>

{props.country_ext === "" ?
    <span><b className="gss_img flag-us"></b> USD  <i className='fa fa-angle-down'></i></span>

    : props.country_ext === "en-sg" || props.country_ext === "zh-sg" ? <span><b className="gss_img flag-sg"></b>SGD <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "zh-tw" || props.country_ext === "en-tw" ? <span><b className="gss_img flag-tw"></b>TWD <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "ja-jp" || props.country_ext === "en-jp" ? <span><b className="gss_img flag-jp"></b>USD <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "zh-hk" || props.country_ext === "en-hk" ? <span><b className="gss_img flag-hk"></b>USD <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "ko-kr" || props.country_ext === "en-kr" ? <span><b className="gss_img flag-kr"></b>KRW <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-ph" ? <span><b className="gss_img flag-ph"></b>PHP <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-th" || props.country_ext === "th-th" ? <span><b className="gss_img flag-th"></b>THB <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-gb" ? <span><b className="gss_img flag-gb"></b>GBP <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-in" || props.country_ext === "hi-in" ? <span><b className="gss_img flag-in"></b>INR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-sl" ? <span><b className="gss_img flag-sl"></b>LKR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-za" ? <span><b className="gss_img flag-za"></b>ZAR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-au" ? <span><b className="gss_img flag-au"></b>AUD <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-ke" ? <span><b className="gss_img flag-ke"></b>KES <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-kw" || props.country_ext === "ar-kw" ? <span><b className="gss_img flag-kw"></b>KWD <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "ms-my" || props.country_ext === "en-my" ? <span><b className="gss_img flag-my"></b>MYR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-nz" ? <span><b className="gss_img flag-nz"></b>NZD <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-sa" || props.country_ext === "ar-sa" ? <span><b className="gss_img flag-sa"></b>SAR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-tr" || props.country_ext === "tr-tr" ? <span><b className="gss_img flag-tr"></b>TRY <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "uk-ua" || props.country_ext === "en-ua" ? <span><b className="gss_img flag-ua"></b>UAH <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-ae" || props.country_ext === "ar-ae" ? <span><b className="gss_img flag-ae"></b>AED <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-ca" || props.country_ext === "fr-ca" ? <span><b className="gss_img flag-ca"></b>CAD <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "hu-hu" || props.country_ext === "de-hu" ? <span><b className="gss_img flag-hu"></b>HUF <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "de-at" || props.country_ext === "fr-at" ? <span><b className="gss_img flag-at"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-rs" || props.country_ext === "sr-rs" ? <span><b className="gss_img flag-rs"></b>RSD <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "de-ch" || props.country_ext === "fr-ch" ? <span><b className="gss_img flag-ch"></b>CHF <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "de-de" || props.country_ext === "en-de" ? <span><b className="gss_img flag-de"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-il" || props.country_ext === "he-il" ? <span><b className="gss_img flag-il"></b>ILS <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "bg-bg" || props.country_ext === "en-bg" ? <span><b className="gss_img flag-bg"></b>BGN <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "fr-fr" || props.country_ext === "en-fr" ? <span><b className="gss_img flag-fr"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "it-it" || props.country_ext === "en-it" ? <span><b className="gss_img flag-it"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "da-dk" || props.country_ext === "en-dk" ? <span><b className="gss_img flag-dk"></b>DKK <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "sk-sk" || props.country_ext === "hu-sk" ? <span><b className="gss_img flag-sk"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "no-no" || props.country_ext === "en-no" ? <span><b className="gss_img flag-no"></b>NOK <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-ie" ? <span><b className="gss_img flag-ie"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "es-es" ? <span><b className="gss_img flag-es"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "hr-hr" ? <span><b className="gss_img flag-hr"></b>HRK <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "pl-pl" ? <span><b className="gss_img flag-pl"></b>PLN <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "lt-lt" ? <span><b className="gss_img flag-lt"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "ro-ro" || props.country_ext === "hu-ro" ? <span><b className="gss_img flag-ro"></b>RON <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "lv-lv" ? <span><b className="gss_img flag-lv"></b>LVA <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "nl-nl" || props.country_ext === "en-nl" ? <span><b className="gss_img flag-nl"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "ru-ru" ? <span><b className="gss_img flag-ru"></b>RUB <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "nl-be" || props.country_ext === "fr-be" ? <span><b className="gss_img flag-be"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "cs-cz" || props.country_ext === "de-cz" ? <span><b className="gss_img flag-cz"></b>CZK <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "el-gr" ? <span><b className="gss_img flag-gr"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "pt-pt" ? <span><b className="gss_img flag-pt"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "sv-se" || props.country_ext === "en-se" ? <span><b className="gss_img flag-se"></b>SEK <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "es-mx" || props.country_ext === "en-mx" ? <span><b className="gss_img flag-mx"></b>MXN <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "pt-br" || props.country_ext === "es-br" ? <span><b className="gss_img flag-br"></b>BRL <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "fi-fi" || props.country_ext === "sv-fi" ? <span><b className="gss_img flag-fi"></b>EUR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "zh-cn" ? <span><b className="gss_img flag-cn"></b>CNY <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "en-id" || props.country_ext === "ms-id" ? <span><b className="gss_img flag-id"></b>IDR <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "es-ar" || props.country_ext === "it-ar" ? <span><b className="gss_img flag-ar"></b>ARS <i className='fa fa-angle-down'></i></span>
    : props.country_ext === "es-cl" || props.country_ext === "en-cl" ? <span><b className="gss_img flag-cl"></b>CLP <i className='fa fa-angle-down'></i></span>
    :
    ''
}

        </>
    )
}

export default Curr_list;
