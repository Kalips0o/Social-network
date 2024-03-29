import React from 'react';
import styles from "./users.module.css";
import userPhoto from "../../assets/img/UserPhoto/user.webp";
import {NavLink} from "react-router-dom";
import {UserType} from "../../types/types";

type PropsType = {
    user: UserType
    followingInProgress: Array<number>
    unfollow: (userId: number) => void
    follow: (userId: number) => void
}

let User: React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={styles.users}>
                <span>

                    <div>
                       <NavLink to={'/profile' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : userPhoto}
                             className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div className={styles.usersButtons}>
                       {user.followed
                           ? <button disabled={followingInProgress
                               .some(id => id === user.id)}
                                     onClick={() => { unfollow(user.id) }}>
                               Unfollow</button>
                           : <button disabled={followingInProgress.some(id => id === user.id)}
                                     onClick={() => { follow(user.id) }}>
                               Follow</button>}

                    </div>
                </span>
            <span>
                    <span>
                        <div className={styles.usersName}>{user.name}</div>
                        {/*<div>{user.status}</div>*/}
                    </span>
                {/*<span>*/}
                {/*    <div>{"user.location.country"}</div>*/}
                {/*    <div>{"user.location.city"}</div>*/}
                {/*</span>*/}
                </span>
        </div>)
}

export default User;