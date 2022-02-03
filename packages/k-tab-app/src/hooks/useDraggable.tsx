/*
 * @Autor: hui.wang
 * @Date: 2022-02-03 14:47:55
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-03 21:13:44
 * @emial: hui.wang@bizfocus.cn
 */
import {
    useMemo, useState, useRef, cloneElement
} from 'react'
import type {
    MutableRefObject, ReactElement
} from 'react'
import Draggable, { ControlPosition } from 'react-draggable'

interface IModalRenderProps {
    modalRender?: (node: React.ReactNode) => React.ReactNode;
}

export const useDraggableModalRender = <ElementType extends HTMLDivElement, >(
    targetElement: ReactElement
): [
    IModalRenderProps,
    ReactElement,
    () => void,
    boolean,
    MutableRefObject<ElementType | null>
] => {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState<ControlPosition>({
        x: 0,
        y: 0
    })
    const draggleRef = useRef<ElementType | null>(null)

    return [
        useMemo<IModalRenderProps>(() => {
            return {
                modalRender: (modal) => {
                    return (
                        <Draggable
                            disabled={!draggable}
                            position={position}
                            onDrag={(e, position) => {
                                const { x, y } = position
                                setPosition({
                                    x,
                                    y
                                })
                            }}
                        >
                            <div ref={draggleRef}>{modal}</div>
                        </Draggable>
                    )
                }
            }
        }, [draggable, position, draggleRef]),
        cloneElement(targetElement, {
            onMouseOver: () => {
                if (!draggable) {
                    setDraggable(true)
                }
            },
            onMouseOut: () => {
                setDraggable(false)
            }
        }),
        () => {
            setPosition({
                x: 0,
                y: 0
            })
        },
        draggable,
        draggleRef
    ]
}
