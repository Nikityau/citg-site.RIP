import React, {useCallback, useContext, useEffect, useRef} from 'react';

import BackPart from "./Back.part/Back.part";
import InfoPart from "./Info.part/Info.part";

import {GoUp} from "../../../../Utils/GoUp";

import './Preview.block.scss'

import spaceman_img from '../../../../assets/images/projects/spaceman.png'

import {AppContext, Browser} from "../../../App/App";
import {ProjectInfo} from "../../../../SynteticData/Syntetic.data.type";

export interface IPreviewBlock {
    project: ProjectInfo
}

const PreviewBlock = ({project}: IPreviewBlock) => {
    const appContext = useContext(AppContext)

    const previewBlock = useRef<HTMLDivElement>(null)

    const prevDef = useCallback(e => {
        if (window.screen.width < 500)
            e.preventDefault()
    }, [])

    const onScroll = useCallback(e => {
        if (window.screen.width > 500) return

        if (window.scrollY == 0) {
            GoUp()
            window.addEventListener('touchmove', prevDef, {passive: false})

            previewBlock.current.style.height = 100 + 'vh'

            previewBlock.current.querySelector('h2').style.fontSize = 8 + 'rem'
        }
    }, [])

    let startY = 0;
    let lastY = 0;

    const onTouch = (e: React.TouchEvent) => {
        startY = lastY = e.targetTouches[0].pageY;
    }
    const onTouchMove = (e: React.TouchEvent) => {
        lastY = e.touches[e.touches.length - 1].pageY;

        if (Math.abs(lastY - startY) < 50) return

        if (lastY < startY) {
            previewBlock.current.style.height = 18 + 'vh'

            previewBlock.current.querySelector('h2').style.fontSize = 5 + 'rem'

            setTimeout(() => {
                window.removeEventListener('touchmove', prevDef, false)
            }, 200)
        } else {
            GoUp()
            window.addEventListener('touchmove', prevDef, {passive: false})

            previewBlock.current.style.height = 100 + 'vh'

            previewBlock.current.querySelector('h2').style.fontSize = 8 + 'rem'
        }
    }
    const onTouchEnd = (e: React.TouchEvent) => {
    }

    useEffect(() => {

        window.addEventListener('scroll', onScroll)
        window.addEventListener('touchmove', prevDef, {passive: false})

        return () => {
            window.removeEventListener('touchmove', prevDef, false)
            window.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <div className={'preview-block'}
             ref={previewBlock}>
            {
                window.screen.width >= 500 &&
                <div className={'preview-block-desktop'}>
                    <BackPart/>
                    <InfoPart/>
                </div>
            }
            <div className={'preview-block-mob-ver'}
                 style={{backgroundImage: `url(${spaceman_img})`}}
                 onTouchStart={onTouch}
                 onTouchMove={onTouchMove}
                 onTouchEnd={onTouchEnd}
            >
                <div className={
                    appContext.browser === Browser.SAFARI
                        ? 'preview-block-mob-ver__gradient-purple_Safari'
                        : 'preview-block-mob-ver__gradient-purple_Default'
                }/>
                <div className={
                    appContext.browser === Browser.SAFARI
                        ? 'preview-block-mob-ver__gradient-gray_Safari'
                        : 'preview-block-mob-ver__gradient-gray_Default'
                }/>
                <div className={'preview-block-mob-ver_title'}>
                    <h2>{project?.title || '-'}</h2>
                </div>
                <div className={'preview-block-mob-ver_description'}>
                    <p>
                        {
                            project?.description || '-'
                        }
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PreviewBlock;