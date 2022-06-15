import {Subber} from "../../../Utils/Subber/Subber";
import {TypeEvent} from "../../../Utils/Subber/Subber.TypeEvent.enum";

let instance = null;

class PopUpGalleryController {
    private containerPhoto: HTMLElement | null = null;
    private photoTrack: HTMLElement | null = null;

    private closeButton:HTMLElement | null = null;

    private leftButton: HTMLElement | null = null;
    private rightButton: HTMLElement | null = null;

    private _index: number = 0;

    private _borderLeft: number = 0;
    private _borderRight: number = 0;

    private position: 'leftCopy' | 'main' | 'rightCopy' = 'main'

    constructor() {
        if(instance) {
            throw new Error('Instance of PopUpGalleryController already exist')
        }

        instance = this;

        this.LeftClick = this.LeftClick.bind(this)
        this.RightClick = this.RightClick.bind(this)
    }

    private ChangeIndex(index:number):number {
        if(this._index < this._borderLeft && this.position == 'main') {
            this.position = 'leftCopy'
            return this._borderRight
        }
        if(this._index > this._borderRight && this.position == 'main') {
            this.position = 'rightCopy';
            return this._borderLeft
        }


        return index;
    }

    private LeftClick() {
        console.log(this._index)
        this._index = this.ChangeIndex(--this._index);

        this.ChangeImage()
    }
    private RightClick() {
        this._index = this.ChangeIndex(++this._index)

        this.ChangeImage()
    }

    public Open(index:number) {
        document.getElementById('header').style.zIndex = '0'
        document.getElementById('pop-up-gallery').style.display = 'block'

        this._index = index

        this.Set_opt_children()
        this.Set_addition_children()
        this.Set_events()
        this.ChangeImage()

        this.Off_transition()
        this.ChangeImage()
        setTimeout(() => {
            this.On_transition()
        }, 350)
    }

    private CloseClick() {
        document.getElementById('pop-up-gallery').style.display = 'none'
        document.getElementById('header').style.zIndex = '50'
    }

    private ChangeImage() {
        const f = this.Find_el()

        const f_next = f.next()

        if (!f_next.value) return

        const el = <HTMLElement>f_next.value

        this.Set_pos_by_el(el)

        const last = f.next()
        if (!last.value) return;

        setTimeout(() => {
            const last_el = <HTMLElement>last.value;
            this.Off_transition()
            this.position = 'main'
            this.Set_pos_by_el(last_el)
            this.On_transition()
        }, 350)
    }

    private* Find_el() {
        if(this.position == 'main') {
            return this.photoTrack.querySelector(`[data-pop-up-item-id=\'${this._index}\']`)
        }
        if(this.position == 'leftCopy') {
            yield this.photoTrack.querySelector(`[data-pop-up-el-right-copy-id=\'${this._borderRight}\']`)

            return this.photoTrack.querySelector(`[data-pop-up-item-id=\'${this._borderRight}\']`)
        }
        if(this.position == 'rightCopy') {
            yield this.photoTrack.querySelector('[data-pop-up-el-left-copy-id=\'0\']')

            return this.photoTrack.querySelector('[data-pop-up-item-id=\'0\']')
        }
    }

    private Off_transition() {
        this.photoTrack.style.transition = 'none'
    }
    private On_transition() {
        setTimeout(() => {
            this.photoTrack.style.transition = 'all .3s'
        }, 100)
    }

    private Set_pos_by_el(el:HTMLElement) {
        this.photoTrack.style.left =
            this.containerPhoto.offsetWidth - this.containerPhoto.clientWidth - el.offsetLeft + 'px'
    }
    private Set_opt_children() {
        if(!this.containerPhoto || !this.photoTrack) return;

        const width = this.containerPhoto.clientWidth

        Array.from(this.photoTrack.children).map(child => {
            const el = <HTMLElement>child;
            el.style.width = width + 'px'
        })
    }
    private Set_addition_children() {
        this.Clear_old()

        const firstCopy = <HTMLElement>this.photoTrack.querySelector('[data-pop-up-item-id=\'0\']').cloneNode(true)
        const lastCopy =  <HTMLElement>this.photoTrack.querySelector(`[data-pop-up-item-id=\'${this._borderRight}\']`).cloneNode(true)

        firstCopy.removeAttribute('data-pop-up-main-el')
        lastCopy.removeAttribute('data-pop-up-main-el')
        firstCopy.removeAttribute('data-pop-up-item-id')
        lastCopy.removeAttribute('data-pop-up-item-id')

        firstCopy.setAttribute('data-pop-up-first-el-copy','')
        lastCopy.setAttribute('data-pop-up-last-el-copy','')
        firstCopy.setAttribute('data-pop-up-el-copy','')
        lastCopy.setAttribute('data-pop-up-el-copy','')
        firstCopy.setAttribute('data-pop-up-el-left-copy-id','0')
        lastCopy.setAttribute('data-pop-up-el-right-copy-id',this._borderRight.toString())

        this.photoTrack.prepend(lastCopy)
        this.photoTrack.append(firstCopy)
    }
    private Set_events() {
        try {
            Subber.Subb(this.leftButton, TypeEvent.CLICK, this.LeftClick)
            Subber.Subb(this.rightButton, TypeEvent.CLICK, this.RightClick)
            Subber.Subb(this.closeButton, TypeEvent.CLICK, this.CloseClick)
        } catch (e) {
            console.error(e)
        }
    }
    private Unsub_events() {
        try {
            Subber.Unsubb(this.leftButton, TypeEvent.CLICK, this.LeftClick)
            Subber.Unsubb(this.rightButton, TypeEvent.CLICK, this.RightClick)
            Subber.Unsubb(this.closeButton, TypeEvent.CLICK, this.CloseClick)
        } catch (e) {

        }
    }

    public Clear_old() {
        const copy_els = this.photoTrack.querySelectorAll('[data-pop-up-el-copy]')

        copy_els.forEach(el => {
            this.photoTrack.removeChild(el)
        })
    }

    public Mount(index:number = 0) {
        this.containerPhoto = document.querySelector('.pop-up-gallery_inner-container')
        this.photoTrack = document.querySelector('.pop-up-gallery_items-track')

        this.closeButton = document.querySelector('.pop-up-gallery_close-pop-up')

        this.leftButton = document.querySelector('.pop-up-gallery_left-arrow')
        this.rightButton = document.querySelector('.pop-up-gallery_right-arrow')

        this._index = index;
        this._borderLeft = 0;
        this._borderRight = this.photoTrack.children.length - 1;

        if(!this.photoTrack.children.length) return

        this.Set_opt_children()
        this.Set_addition_children()
        this.Set_events()
        this.ChangeImage()
    }
    public Unmount() {
        this.Unsub_events()

        this.containerPhoto = null;
        this.photoTrack = null
        this.leftButton = null
        this.rightButton = null
        this.closeButton = null

        this._index = 0;
    }
}

const popUpController = new PopUpGalleryController();
export default popUpController;