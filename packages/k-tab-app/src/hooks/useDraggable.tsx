/*
 * @Autor: hui.wang
 * @Date: 2022-02-03 14:47:55
 * @LastEditors: hui.wang
 * @LastEditTime: 2022-02-03 15:32:48
 * @emial: hui.wang@bizfocus.cn
 */
import {
    useMemo, useState, useRef, useCallback, cloneElement
} from 'react'
import type {
    MutableRefObject, ReactElement
} from 'react'
import Draggable, { DraggableBounds, DraggableEventHandler } from 'react-draggable'

interface IModalRenderProps {
    modalRender?: (node: React.ReactNode) => React.ReactNode;
}

export const useDraggableModalRender = <ElementType extends HTMLDivElement, >(
    targetElement: ReactElement
): [
    IModalRenderProps,
    ReactElement,
    boolean,
    MutableRefObject<ElementType | null>
] => {
    const [draggable, setDraggable] = useState(false)
    const [bounds, setBounds] = useState<DraggableBounds>({
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
    })
    const draggleRef = useRef<ElementType | null>(null)
    const onStart = useCallback<DraggableEventHandler>((event, uiData) => {
        const { clientWidth, clientHeight } = window.document.documentElement
        const targetRect = draggleRef.current?.getBoundingClientRect()

        if (!targetRect) {
            return
        }

        setBounds({
            left: -targetRect.left + uiData.x,
            right: clientWidth - (targetRect.right - uiData.x),
            top: -targetRect.top + uiData.y,
            bottom: clientHeight - (targetRect.bottom - uiData.y)
        })
    }, [])

    return [
        useMemo<IModalRenderProps>(() => {
            return {
                modalRender: (modal) => {
                    return (
                        <Draggable
                            disabled={!draggable}
                            bounds={bounds}
                            onStart={onStart}
                        >
                            <div ref={draggleRef}>{modal}</div>
                        </Draggable>
                    )
                }
            }
        }, [draggable, bounds, onStart, draggleRef]),
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
        draggable,
        draggleRef
    ]
}
