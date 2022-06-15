import React, {useEffect} from 'react';

import {IPopUpGallery} from "./PopUpGallery.interface/PopUpGallery.interface";

import './PopUpGallery.scss'

import popUpController from "./PopUpGallery.controller/PopUpGallery.controller";

import arrow_img from '../../assets/icons/aroow-circle.svg'

const PopUpGallery = ({ images }:IPopUpGallery) => {

    useEffect(() => {
        popUpController.Mount();

        return () => {
            popUpController.Unmount()
        }
    }, [images])

    return (
        <div className={'pop-up-gallery'} id={'pop-up-gallery'}>
            <div className={'pop-up-gallery_close-pop-up'}/>
            <div className={'pop-up-gallery_left-arrow'}>
                <img src={arrow_img} alt={'img'}/>
            </div>
            <div className={'pop-up-gallery_right-arrow'}>
                <img src={arrow_img} alt={'img'}/>
            </div>
            <div className={'pop-up-gallery_inner-container'}>
                <div className={'pop-up-gallery_list-of-items'}>
                    <div className={'pop-up-gallery_items-track'}>
                        {
                            images.map((item, index) => (
                                <div key={item.id} className={'pop-up-gallery_item'}
                                    data-pop-up-item-id={index} data-pop-up-main-el=''
                                >
                                    <img src={item.imgSrc} alt={'img'}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUpGallery;