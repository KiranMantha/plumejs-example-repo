interface HTMLElement {
	trigger: (eventName: string, isBubbling?: boolean) => void;
	update: () => void;
	getModel: () => { [key: string]: any };
}

interface Window {
	XMLHttpRequest: jest.Mock<any, any>;
	returnMockHttpResponse: (response: any) => void;
	MutationObserver: any;
	WebKitMutationObserver: any;
}

interface Type<T> {
	new (...args: any[]): T;
}

interface String {
	translate: (...args: any) => string;
}

interface fetch {
	resetMocks: () => void;
	mockResponseOnce: (mockResponse:string) => void;
}

// declare module '*.scss' {
//   interface IClassNames {
//     [className: string]: string
//   }
//   const classNames: IClassNames;
//   export = classNames;
// }

declare module '*.scss' {
  const content: any;
  export default content;
}

// declare module '*.scss' {
//   const content: {[className: string]: string};
//   export = content;
// }