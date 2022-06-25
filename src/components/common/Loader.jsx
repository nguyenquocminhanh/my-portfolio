import React, {useEffect, useState} from 'react'

export default function Loader() {
    const [isFadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFadeOut(true);
        }, 850);
        return () => clearTimeout(timer);
    }, []);

  return (  
	<div id="preloader" class={isFadeOut ? 'fadeOut-on' : ''}>
        <div id="status">
            <div class="loader-revolve center">
                <span></span>
            </div>
        </div>
    </div>
  )
}
