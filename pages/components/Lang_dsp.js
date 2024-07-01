    import React from 'react';

    const Lang_dsp = (props) => {

    return (
    <>
    {props.country_ext === "" ? <span>English</span> 
: props.country_ext === "en-sg" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "zh-sg" ?	<span>中文 <i className='fa fa-angle-down'></i></span>
: props.country_ext === "zh-tw" ?	<span>中文 <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-tw" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "ja-jp" ?	<span>倭国 <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-jp" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "zh-hk" ?	<span>中文 <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-hk" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "ko-kr" ?	<span>한국어 <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-kr" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-ph" ?	<span>English </span>
: props.country_ext === "en-th" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "th-th" ?	<span>แบบไทย <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-gb" ?	<span>English </span>
: props.country_ext === "en-in" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "hi-in" ?	<span>हिन्दी <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-sl" ?	<span>English </span>
: props.country_ext === "en-za" ?	<span>English </span>
: props.country_ext === "en-au" ?	<span>English </span>
: props.country_ext === "en-ke" ?	<span>English </span>
: props.country_ext === "en-kw" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "ar-kw" ?	<span>عربى<i className='fa fa-angle-down'></i></span>
: props.country_ext === "ms-my" ?	<span>melayu <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-my" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-nz" ?	<span>English </span>
: props.country_ext === "en-sa" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "ar-sa" ?	<span>عربى <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-tr" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "tr-tr" ?	<span>Türk <i className='fa fa-angle-down'></i></span>
: props.country_ext === "uk-ua" ?	<span>русский <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-ua" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-ae" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "ar-ae" ?	<span>عربى <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-ca" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "fr-ca" ?	<span>française <i className='fa fa-angle-down'></i></span>
: props.country_ext === "hu-hu" ?	<span>Magyar <i className='fa fa-angle-down'></i></span>
: props.country_ext === "de-hu" ?	<span>deutsch <i className='fa fa-angle-down'></i></span>
: props.country_ext === "de-at" ?	<span>deutsch <i className='fa fa-angle-down'></i></span>
: props.country_ext === "fr-at" ?	<span>française <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-rs" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "sr-rs" ?	<span>Српски <i className='fa fa-angle-down'></i></span>
: props.country_ext === "de-ch" ?	<span>deutsch <i className='fa fa-angle-down'></i></span>
: props.country_ext === "fr-ch" ?	<span>française <i className='fa fa-angle-down'></i></span>
: props.country_ext === "de-de" ?	<span>deutsch <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-de" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-il" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "he-il" ?	<span>עִברִית <i className='fa fa-angle-down'></i></span>
: props.country_ext === "bg-bg" ?	<span>български <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-bg" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "fr-fr" ?	<span>française <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-fr" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "it-it" ?	<span>italiano <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-it" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "da-dk" ?	<span>dansk <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-dk" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "sk-sk" ?	<span>slovenský <i className='fa fa-angle-down'></i></span>
: props.country_ext === "hu-sk" ?	<span>Magyar <i className='fa fa-angle-down'></i></span>
: props.country_ext === "no-no" ?	<span>norsk <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-no" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-ie" ?	<span>English </span>
: props.country_ext === "es-es" ?	<span>español </span>
: props.country_ext === "hr-hr" ?	<span>Hrvatski </span>
: props.country_ext === "pl-pl" ?	<span>Polskie </span>
: props.country_ext === "lt-lt" ?	<span>lietuvis </span>
: props.country_ext === "ro-ro" ?	<span>Română <i className='fa fa-angle-down'></i></span>
: props.country_ext === "hu-ro" ?	<span>Magyar <i className='fa fa-angle-down'></i></span>
: props.country_ext === "lv-lv" ?	<span>latviski <i className='fa fa-angle-down'></i></span> 
: props.country_ext === "nl-nl" ?	<span>nederlands <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-nl" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "ru-ru" ?	<span>русский </span>
: props.country_ext === "nl-be" ?	<span>deutsch <i className='fa fa-angle-down'></i></span>
: props.country_ext === "fr-be" ?	<span>française <i className='fa fa-angle-down'></i></span>
: props.country_ext === "cs-cz" ?	<span>čeština <i className='fa fa-angle-down'></i></span>
: props.country_ext === "de-cz" ?	<span>deutsch <i className='fa fa-angle-down'></i></span>
: props.country_ext === "el-gr" ?	<span>English </span>
: props.country_ext === "pt-pt" ?	<span>Português </span>
: props.country_ext === "sv-se" ?	<span>svenska <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-se" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "es-mx" ?	<span>español <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-mx" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "pt-br" ?	<span>Português <i className='fa fa-angle-down'></i></span>
: props.country_ext === "es-br" ?	<span>español <i className='fa fa-angle-down'></i></span>
: props.country_ext === "fi-fi" ?	<span>Suomalainen <i className='fa fa-angle-down'></i></span>
: props.country_ext === "sv-fi" ?	<span>svenska <i className='fa fa-angle-down'></i></span>
: props.country_ext === "zh-cn" ?	<span>中文 </span>
: props.country_ext === "en-id" ?	<span>English <i className='fa fa-angle-down'></i></span>
: props.country_ext === "ms-id" ?	<span>melayu <i className='fa fa-angle-down'></i></span>
: props.country_ext === "es-ar" ?	<span>español <i className='fa fa-angle-down'></i></span>
: props.country_ext === "it-ar" ?	<span>italiano <i className='fa fa-angle-down'></i></span>
: props.country_ext === "es-cl" ?	<span>español <i className='fa fa-angle-down'></i></span>
: props.country_ext === "en-cl" ?	<span>English<i className='fa fa-angle-down'></i></span>
:
''
}



    </>
    )
    }

    export default Lang_dsp;
