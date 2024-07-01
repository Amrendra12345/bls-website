import React from 'react';
const Lang_dd = (props) => {

    return (
        <>
{props.country_ext === "" ?
''
: props.country_ext === "en-sg" || props.country_ext === "zh-sg" ?
<div className='cn_dd la_ndd'>
<a href='/en-sg'>English</a>
<a href='/zh-sg'>中文</a>
</div>
: props.country_ext === "zh-tw" || props.country_ext === "en-tw" ?
<div className='cn_dd la_ndd'>
<a href='/zh-tw'>中文</a>
<a href='/en-tw'>English</a>
</div>
: props.country_ext === "ja-jp" || props.country_ext === "en-jp" ?
<div className='cn_dd la_ndd'>
<a href='/ja-jp'>倭国 </a>
<a href='/en-jp'>English</a>
</div>

: props.country_ext === "zh-hk" || props.country_ext === "en-hk" ?

<div className='cn_dd la_ndd'>
<a href='/zh-hk'>中文</a>
<a href='/en-hk'>English</a>
</div>
: props.country_ext === "ko-kr" || props.country_ext === "en-kr" ?

<div className='cn_dd la_ndd'>
<a href='/ko-kr'>한국어 </a>
<a href='/en-kr'>English</a>
</div>

: props.country_ext === "en-ph" ? ''

: props.country_ext === "en-th" || props.country_ext === "th-th" ?

<div className='cn_dd la_ndd'>
<a href='/en-th'>English </a>
<a href='/th-th'>แบบไทย</a>
</div>
: props.country_ext === "en-gb" ? ''

: props.country_ext === "en-in" || props.country_ext === "hi-in" ?

<div className='cn_dd la_ndd'>
<a href='/en-in'>English</a>
<a href='/hi-in'>हिन्दी</a>
</div>

: props.country_ext === "en-sl" ? ''
: props.country_ext === "en-za" ? ''
: props.country_ext === "en-au" ? ''
: props.country_ext === "en-ke" ? ''

: props.country_ext === "en-kw" || props.country_ext === "ar-kw" ?

<div className='cn_dd la_ndd'>
<a href='/en-kw'>English</a>
<a href='/ar-kw'>عربى</a>
</div>

: props.country_ext === "ms-my" || props.country_ext === "en-my" ?

<div className='cn_dd la_ndd'>
<a href='/ms-my'>melayu </a>
<a href='/en-my'>English</a>
</div>

: props.country_ext === "en-nz" ? ''
: props.country_ext === "en-sa" || props.country_ext === "ar-sa" ?

<div className='cn_dd la_ndd'>
<a href='/en-sa'>English</a>
<a href='/ar-sa'>عربى</a>
</div>

: props.country_ext === "en-tr" || props.country_ext === "tr-tr" ?

<div className='cn_dd la_ndd'>
<a href='/en-tr'>English</a>
<a href='/tr-tr'>Türk</a>
</div>

: props.country_ext === "uk-ua" || props.country_ext === "en-ua" ?

<div className='cn_dd la_ndd'>
<a href='/uk-ua'>русский</a>
<a href='/en-ua'>English</a>
</div>


: props.country_ext === "en-ae" || props.country_ext === "ar-ae" ?

<div className='cn_dd la_ndd'>
<a href='/en-ae'>English</a>
<a href='/ar-ae'>عربى</a>
</div>

: props.country_ext === "en-ca" || props.country_ext === "fr-ca" ?

<div className='cn_dd la_ndd'>
<a href='/en-ca'>English</a>
<a href='/fr-ca'>française</a>
</div>

: props.country_ext === "hu-hu" || props.country_ext === "de-hu" ?

<div className='cn_dd la_ndd'>
<a href='/hu-hu'>Magyar</a>
<a href='/de-hu'>deutsch</a>
</div>

: props.country_ext === "de-at" || props.country_ext === "fr-at" ?

<div className='cn_dd la_ndd'>
<a href='/de-at'>deutsch</a>
<a href='/fr-at'>française</a>
</div>

: props.country_ext === "en-rs" || props.country_ext === "sr-rs" ?

<div className='cn_dd la_ndd'>
<a href='/en-rs'>English</a>
<a href='/sr-rs'>Српски</a>
</div>

: props.country_ext === "de-ch" || props.country_ext === "fr-ch" ?

<div className='cn_dd la_ndd'>
<a href='/de-ch'>deutsch</a>
<a href='/fr-ch'>française</a>
</div>

: props.country_ext === "de-de" || props.country_ext === "en-de" ?

<div className='cn_dd la_ndd'>
<a href='/de-de'>deutsch</a>
<a href='/en-de'>English</a>
</div>

: props.country_ext === "en-il" || props.country_ext === "he-il" ?

<div className='cn_dd la_ndd'>
<a href='/en-il'>English</a>
<a href='/he-il'>עִברִית</a>
</div>

: props.country_ext === "bg-bg" || props.country_ext === "en-bg" ?

<div className='cn_dd la_ndd'>
<a href='/bg-bg'>български</a>
<a href='/en-bg'>English</a>
</div>

: props.country_ext === "fr-fr" || props.country_ext === "en-fr" ?

<div className='cn_dd la_ndd'>
<a href='/fr-fr'>française</a>
<a href='/en-fr'>English</a>
</div>

: props.country_ext === "it-it" || props.country_ext === "en-it" ?

<div className='cn_dd la_ndd'>
<a href='/it-it'>italiano</a>
<a href='/en-it'>English</a>
</div>

: props.country_ext === "da-dk" || props.country_ext === "en-dk" ?

<div className='cn_dd la_ndd'>
<a href='/da-dk'>dansk</a>
<a href='/en-dk'>English</a>
</div>

: props.country_ext === "sk-sk" || props.country_ext === "hu-sk" ?

<div className='cn_dd la_ndd'>
<a href='/sk-sk'>slovenský</a>
<a href='/hu-sk'>Magyar</a>
</div>
: props.country_ext === "no-no" || props.country_ext === "en-no" ?

<div className='cn_dd la_ndd'>
<a href='/no-no'>norsk</a>
<a href='/en-no'>English</a>
</div>

: props.country_ext === "en-ie" ? ''
: props.country_ext === "es-es" ? ''
: props.country_ext === "hr-hr" ? ''
: props.country_ext === "pl-pl" ? ''
: props.country_ext === "lt-lt" ? ''

: props.country_ext === "ro-ro" || props.country_ext === "hu-ro" ?

<div className='cn_dd la_ndd'>
<a href='/ro-ro'>Română</a>
<a href='/hu-ro'>Magyar</a>
</div>
: props.country_ext === "lv-lv" ? ''

: props.country_ext === "nl-nl" || props.country_ext === "en-nl" ?

<div className='cn_dd la_ndd'>
<a href='/nl-nl'>nederlands</a>
<a href='/en-nl'>English</a>
</div>

: props.country_ext === "ru-ru" ? ''
: props.country_ext === "nl-be" || props.country_ext === "fr-be" ?

<div className='cn_dd la_ndd'>
<a href='/nl-be'>deutsch</a>
<a href='/fr-be'>française</a>
</div>

: props.country_ext === "cs-cz" || props.country_ext === "de-cz" ?

<div className='cn_dd la_ndd'>
<a href='/cs-cz'>čeština</a>
<a href='/de-cz'> deutsch</a>
</div>

: props.country_ext === "el-gr" ? ''
: props.country_ext === "pt-pt" ? ''



: props.country_ext === "sv-se" || props.country_ext === "en-se" ?

    <div className='cn_dd la_ndd'>
        <a href='/sv-se'>svenska</a>
        <a href='/en-se'>English</a>
    </div>

    : props.country_ext === "es-mx" || props.country_ext === "en-mx" ?

        <div className='cn_dd la_ndd'>
            <a href='/es-mx'>español</a>
            <a href='/en-mx'>English</a>
        </div>

        : props.country_ext === "pt-br" || props.country_ext === "es-br" ?

            <div className='cn_dd la_ndd'>
                <a href='/pt-br'>Português</a>
                <a href='/es-br'>español</a>
            </div>

            : props.country_ext === "fi-fi" || props.country_ext === "sv-fi" ?

                <div className='cn_dd la_ndd'>
                    <a href='/fi-fi'>Suomalainen</a>
                    <a href='/sv-fi'>svenska</a>
                </div>

                : props.country_ext === "zh-cn" ? ''

                    : props.country_ext === "en-id" || props.country_ext === "ms-id" ?

                        <div className='cn_dd la_ndd'>
                            <a href='/en-id'>English</a>
                            <a href='/ms-id'>melayu</a>
                        </div>

                        : props.country_ext === "es-ar" || props.country_ext === "it-ar" ?

                            <div className='cn_dd la_ndd'>
                                <a href='/es-ar'>español</a>
                                <a href='/it-ar'>italiano</a>
                            </div>

                            : props.country_ext === "es-cl" || props.country_ext === "en-cl" ?

                                <div className='cn_dd la_ndd'>
                                    <a href='/es-cl'>español</a>
                                    <a href='/en-cl'>English</a>
                                </div>
                                :
                                ''
}


        </>
    )
}

export default Lang_dd;
