import {atom, selector} from 'recoil'

const networkAtom = atom({
    key:"networkAtom",
    default:105
});

const jobsAtom = atom({
    key:"jobsAtom",
    default:0
});

const notificationsAtom = atom({
    key:"notificationsAtom",
    default:12
});

const messagesAtom = atom({
    key:"messagesAtom",
    default:0
});


const myNotificationsSelector=selector({
    key:"myNotificationsSelector",
    get:({get})=>{
        const ne_c = get(networkAtom);
        const jo_c = get(jobsAtom)
        const me_c = get(messagesAtom);
        const no_c = get(notificationsAtom)
        return ne_c+jo_c+me_c+no_c
    }
  })
export {networkAtom,jobsAtom,notificationsAtom,messagesAtom,myNotificationsSelector}

