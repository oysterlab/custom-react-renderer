import ReactReconciler from "react-reconciler"

import * as renders from './common/render'
import { stripPrefix } from "./flux/helper/stripPrefix";

function renderInstance(type:any, props:any, layer:any) {
	const { children, ...otherProps } = props
  const renderer = (renders as any)[stripPrefix(type)]
  const element = renderer(layer)(otherProps)
  return element
}

const hostConfig:ReactReconciler.HostConfig<any,any,any,any,any,any,any,any,any,any,any,any,any> = {
	supportsMutation: true,
	supportsPersistence: false,
	
	createInstance: function (type: any, props: any, rootContainer: any, hostContext: any, internalHandle: any) {
		return renderInstance(type, props, null)
	},
	commitUpdate(instance, updatePayload, type, prevProps, nextProps, internalHandle) {
		return renderInstance(type, nextProps, instance);
	},
	appendChildToContainer(container, child) {
		container.appendChild(child)
	},
	appendChild(parentInstance, child) {
		parentInstance.appendChild(child)
	},
	appendInitialChild: function (parentInstance: any, child: any): void {
		parentInstance.appendChild(child)
	},  
	clearContainer(container) {
		let c = container.firstChild
		while (c) {
			container.removeChild(c)
			c = container.firstChild
		}
	},
	createTextInstance: function (text: string, rootContainer: any, hostContext: any, internalHandle: any) {
		return text		
	},
	commitMount(instance, type, props, internalInstanceHandle) {},
	finalizeInitialChildren: function (instance: any, type: any, props: any, rootContainer: any, hostContext: any): boolean {
		switch(stripPrefix(type)) {
			case 'text':
			case 'layout':
				return true
			default:
				return false
		}
	},
	prepareUpdate: function (instance: any, type: any, oldProps: any, newProps: any, rootContainer: any, hostContext: any) {
		return true
	},
	shouldSetTextContent: function (type: any, props: any): boolean {
		switch(stripPrefix(type)) {
			case 'text':
				return true
			default:
				return false
		}
	},
	getRootHostContext: function (rootContainer: any) {
		return true
	},
	getChildHostContext: function (parentHostContext: any, type: any, rootContainer: any) {
		return true
	},
	getPublicInstance: (instance:any) => {
		return instance;
	},
	prepareForCommit: function (containerInfo: any): Record<string, any> | null {
		return {}
	},
	resetAfterCommit: function (containerInfo: any): void {},
	preparePortalMount: function (containerInfo: any): void {
			throw new Error("Function not implemented.")
	},
	scheduleTimeout: function (fn: (...args: unknown[]) => unknown, delay?: number | undefined) {
			throw new Error("Function not implemented.")
	},
	cancelTimeout: function (id: any): void {
			throw new Error("Function not implemented.")
	},
	noTimeout: undefined,
	isPrimaryRenderer: false,
	getCurrentEventPriority: function (): number {
			throw new Error("Function not implemented.")
	},
	getInstanceFromNode: function (node: any): ReactReconciler.Fiber | null | undefined {
			throw new Error("Function not implemented.")
	},
	beforeActiveInstanceBlur: function (): void {
			throw new Error("Function not implemented.")
	},
	afterActiveInstanceBlur: function (): void {
			throw new Error("Function not implemented.")
	},
	prepareScopeUpdate: function (scopeInstance: any, instance: any): void {
			throw new Error("Function not implemented.")
	},
	getInstanceFromScope: function (scopeInstance: any) {
			throw new Error("Function not implemented.")
	},
	removeChildFromContainer(container, child) {
		container.removeChild(child)
	},
	detachDeletedInstance: function (node: any): void {},
	supportsHydration: false
}

export const renderer = ReactReconciler(hostConfig)