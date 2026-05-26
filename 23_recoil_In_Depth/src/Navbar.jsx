import {notificationsAtom,messagesAtom,jobsAtom,networkAtom,myNotificationsSelector} from './atoms'
import { useRecoilValue } from 'recoil'
import {useMemo} from 'react'


function Navbar(){

    const networkCount = useRecoilValue(networkAtom)
    const jobsCount = useRecoilValue(jobsAtom)
    const messagesCount = useRecoilValue(messagesAtom)
    const notificationsCount = useRecoilValue(notificationsAtom)
    const myNotifications = useRecoilValue(myNotificationsSelector)
    // const myNotifications = useMemo(()=>{
    //     return networkCount+jobsCount+messagesCount+notificationsCount
    // },[networkCount,jobsCount,messagesCount,notificationsCount]) 
    return <div>
        <button>Home</button>
  <button>my network ({networkCount})</button>
  <button>jobs ({jobsCount})</button>
  <button>messages ({messagesCount})</button>
  <button>notifications ({notificationsCount})</button>
  <button>me <sup>{myNotifications}</sup></button>
    </div>
}

export {Navbar} 