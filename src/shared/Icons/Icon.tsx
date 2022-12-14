import { useEffect, useState } from "react";
import React from 'react'
import BlockIcon from "./BlockIcon";
import CommentIcon from "./CommentIcon";
import ReportIcon from "./ReportIcon";
import ShareIcon from "./ShareIcon";
import SaveIcon from "./SaveIcon";
import styles from './icon.css';
import { LikesUpIcon } from "./LikesUpIcon";

export enum IconsName {
    block = 'block',
    comment = 'comment',
    report = 'report',
    share = 'share',
    save = 'save',
    likesUp = 'likes-up'
}

export interface IIConsDefault {
    className?: string,
    type?: IconsName,
    size?: any,
    animated?: string,
}

const Icon = (props: IIConsDefault) => {
    const [defSize, setDefSize] = useState(14);
    useEffect(() => {
        if (props.size) {
            setDefSize(props.size)
        };        
    }, []);

    const PossibleIcons = () => {
        switch (props.type) {
            case (IconsName.block ) : return <BlockIcon size={defSize} />
            case (IconsName.comment) : return <CommentIcon size={defSize} />
            case (IconsName.report) : return <ReportIcon size={defSize} />
            case (IconsName.share) : return <ShareIcon size={defSize} />
            case (IconsName.save) : return <SaveIcon size={defSize} />
            case (IconsName.likesUp) : return <LikesUpIcon size={defSize} />
            default : return <BlockIcon size={defSize} />
        }
    }

    return (
        <div style={{marginRight: '5px'}}
            className={props.className ? props.className : styles.default_icon}>
            <PossibleIcons />
        </div>
    )
}

export default Icon;