import ReactReconciler from "react-reconciler"
import * as renders from './render'
const hostConfig:ReactReconciler.HostConfig<any,any,any,any,any,any,any,any,any,any,any,any,any> = {
	supportsMutation: true,
	supportsPersistence: false,
	createInstance: function (type: any, props: any, rootContainer: any, hostContext: any, internalHandle: any) {
		return (renders as any)[type.replace('prism-', '')](props)
	},
	clearContainer(container) {

	},
	createTextInstance: function (text: string, rootContainer: any, hostContext: any, internalHandle: any) {
	},
	appendChildToContainer(container, child) {
		container.appendChild(child)
	},
	appendInitialChild: function (parentInstance: any, child: any): void {
		parentInstance.appendChild(child)
	},
	commitMount(instance, type, props, internalInstanceHandle) {
		
	},
	finalizeInitialChildren: function (instance: any, type: any, props: any, rootContainer: any, hostContext: any): boolean {
		return true
	},
	prepareUpdate: function (instance: any, type: any, oldProps: any, newProps: any, rootContainer: any, hostContext: any) {
			throw new Error("Function not implemented.")
	},
	shouldSetTextContent: function (type: any, props: any): boolean {
		return true
	},
	getRootHostContext: function (rootContainer: any) {
		return true
	},
	getChildHostContext: function (parentHostContext: any, type: any, rootContainer: any) {
		return true
	},
	getPublicInstance: function (instance: any) {
			throw new Error("Function not implemented.")
	},
	prepareForCommit: function (containerInfo: any): Record<string, any> | null {
		return null
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