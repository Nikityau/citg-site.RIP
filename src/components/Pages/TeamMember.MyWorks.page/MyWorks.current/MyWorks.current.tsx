import React, {useCallback, useEffect, useState} from 'react';

import {Work} from "../../../../SynteticData/Syntetic.data.type";

import {getChangedIndex} from "../../../../Utils/getChangedIndex";

import '../MyWorks.page.scss'

import full_page_icon from '../../../../assets/icons/full-page-icon.svg'
import arrow_icon from '../../../../assets/icons/arrow.svg'
import crosshair_icon from '../../../../assets/icons/crosshair.svg'

interface IMyCurrentWork {
    work: Work
}

const MyWorksCurrent = ({work}: IMyCurrentWork) => {
    const [currentImg, setCurrentImg] = useState(work?.img || null)
    const [currentIndexImg, setCurrentIndexImg] = useState<number>(-1)
    const [isPopUpImage, setIsPopUpImage] = useState<boolean>(false)

    const getClassByIndex = (index: number): string => {
        if (index % 5 == 0) return 'my-works_dev-stage-item-5'

        return 'my-works_dev-stage-item'
    }

    useEffect(() => {
        setCurrentImg(work?.img)
    }, [work])


    const nextImgByClick = (index: number, direction: 'left' | 'right' | 'unset' = 'unset') => {
        const new_index = getChangedIndex(0,
            work?.development_stages.length - 1,
            index, -1, direction)

        if(new_index == -1) {
            setCurrentImg(work?.img || '')
        } else {
            setCurrentImg(work?.development_stages[new_index].imgSrc || '')
        }

        setCurrentIndexImg(new_index)
    }
    nextImgByClick.leftClick = (index: number) => nextImgByClick(index - 1, 'left')
    nextImgByClick.rightClick = (index: number) => nextImgByClick(index + 1, 'right')

    const prevDef = useCallback((e:Event) => {
        e.preventDefault()
    }, [])

    const openPopUp = () => {
        if(!currentImg) return



        window.addEventListener('wheel', prevDef, { passive: false })

        setIsPopUpImage(true)
    }
    const closePopUp = () => {

        window.removeEventListener('wheel', prevDef, false)

        setIsPopUpImage(false)
    }

    return (
        <div className={'my-works_current-work'}>
            <div className={['my-works_pop-up-image',
                isPopUpImage ? 'my-works_pop-up-open' : ''].join(' ')}>
                <div className={'my-works_pop-up-crosshair'} onClick={closePopUp}>
                    <img src={crosshair_icon} alt={'icon'}/>
                </div>
                <div className={'my-works_pop-up-img-container'}
                style={{ backgroundImage: `url(${currentImg})` }}>
                </div>
            </div>
            <div className={'my-works_container'}>
                <div className={'my-works_current-el'}
                style={{ backgroundImage: `url(${currentImg})` }}>
                    <div className={'my-works_els-controller-panel'}>
                        {
                            work?.development_stages &&
                            <div className={'my-works_left-button'}
                                onClick={() => nextImgByClick.leftClick(currentIndexImg)}
                            >
                                <img src={arrow_icon} alt={'img'}/>
                            </div>
                        }
                        <div className={'my-works_full-page-button'}
                            onClick={openPopUp}
                        >
                            <img src={full_page_icon} alt={''}/>
                        </div>
                        {
                            work?.development_stages &&
                            <div className={'my-works_right-button'}
                                onClick={() => nextImgByClick.rightClick(currentIndexImg)}
                            >
                                <img src={arrow_icon} alt={'img'}/>
                            </div>
                        }
                    </div>
                </div>
                <div className={'my-works_dev-stage'}>
                    {
                        work?.development_stages.map((stage, index) => (
                            <div className={getClassByIndex(index + 1)} key={stage.id}
                                 onClick={() => nextImgByClick(currentIndexImg == index ? -1 : index)}
                                style={{ backgroundImage: `url(${stage.imgSrc})` }}
                            >
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default MyWorksCurrent;