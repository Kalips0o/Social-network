import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import authorImg from '../../../../assets/img/UserPhoto/user.webp'
import styles from './Post.module.css'
import {ProfilePropsType} from "../../../../types/types";


export type PostType = {
    id?: number
    profile?: ProfilePropsType
    message: string
    likesCount: number
}

export const Post = (props: PostType) => {
    const photo = props.profile?.photos?.small ? props.profile.photos.small : authorImg;

    return (
        <div className={styles.item}>
            <div className={styles.itemImg}>
                {photo && <img src={photo} alt="" />}
            </div>
            <div className={styles.itemText}>
                <div className={styles.itemName}>
                    {props.profile?.fullName || 'Samurai'}
                </div>
                <div className={styles.itemMessage}>
                    {props.message}
                </div>
            </div>
            <div className={styles.itemLike}>
                <FontAwesomeIcon icon={faHeart as IconProp} /> {props.likesCount}
            </div>
        </div>
    )
}
