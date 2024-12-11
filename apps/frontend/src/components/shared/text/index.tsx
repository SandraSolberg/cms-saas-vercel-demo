'use client'
import { type FunctionComponent, type DetailedHTMLProps, type HTMLAttributes } from "react"
import { RichText, RichTextComponentDictionary as DefaultComponents, DefaultComponentFactory, type NodeInput, Utils } from "@remkoj/optimizely-cms-react"

const richTextFactory = new DefaultComponentFactory(DefaultComponents)

export type ItemTextProps = {
    text: NodeInput | string | undefined | null
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const ItemTextComponent : FunctionComponent<ItemTextProps> = ({ text, ...divProps }) => {
    return Utils.isNodeInput(text) ? 
        <RichText text={ text } factory={ richTextFactory } {...divProps } /> : 
        <div { ...divProps }>{ Utils.isNonEmptyString(text) ? text : ''}</div>
}

export default ItemTextComponent