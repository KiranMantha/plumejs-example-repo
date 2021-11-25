var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
}) : (function (o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "typescript"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const ts = __importStar(require("typescript"));
    const factory = ts.factory;
    function containDecorators(decorators, node) {
        if (decorators.length) {
            return decorators.some(d => node.getFullText().trim().startsWith('@' + d));
        }
        return false;
    }
    function getDecoratorMetaData(decoratorName, node) {
        const [decorator] = node.decorators.filter(d => d.getFullText().trim().startsWith('@' + decoratorName));
        console.log(decorator.escapedText);
        if (decorator) {
            let params = null;
            if (ts.isCallExpression(decorator.expression)) {
                const args = decorator.expression.arguments;
                params = args.length && args[0].getText();
            }
            return {
                name: decoratorName,
                params
            };
        }
    }
    const getConstructorMethod = (node) => {
        const constructorMethod = node.members
            .filter(node => ts.isConstructorDeclaration(node))
            .map(node => node);
        return constructorMethod.length && constructorMethod[0];
    };
    const astTransformer = (context) => {
        return sourceFile => {
            const visitor = (node) => {
                if (ts.isDecorator(node) && containDecorators(["Component" /* COMPONENT */, "Injectable" /* INJECTABLE */, "Input" /* INPUT */], node)) {
                    return undefined;
                }
                if (ts.isClassDeclaration(node)) {
                    if (node.decorators) {
                        const constructor = getConstructorMethod(node);
                        const componentDecorator = getDecoratorMetaData("Component" /* COMPONENT */, node);
                        const injectableDecorator = getDecoratorMetaData("Injectable" /* INJECTABLE */, node);
                        const nodeName = node.name.escapedText;
                        let constructorParametersTypes = [];
                        let decoratorStaticNode = undefined;
                        if (constructor) {
                            constructorParametersTypes = constructor.parameters.map(param => param.type.getText());
                        }
                        if (componentDecorator) {
                            decoratorStaticNode = factory.createExpressionStatement(factory.createCallExpression(factory.createCallExpression(factory.createIdentifier(componentDecorator.name), undefined, [factory.createIdentifier(componentDecorator.params)]), undefined, [factory.createArrayLiteralExpression([
                                ...constructorParametersTypes.map(p => factory.createStringLiteral(p)),
                                factory.createIdentifier(nodeName)
                            ], false)]));
                        }
                        else if (injectableDecorator) {
                            decoratorStaticNode = factory.createExpressionStatement(factory.createCallExpression(factory.createCallExpression(factory.createIdentifier(injectableDecorator.name), undefined, [factory.createStringLiteral(nodeName)]), undefined, [factory.createArrayLiteralExpression([
                                ...constructorParametersTypes.map(p => factory.createStringLiteral(p)),
                                factory.createIdentifier(nodeName)
                            ], false)]));
                        }
                        const classNode = factory.updateClassDeclaration(node, undefined, node.modifiers, node.name, node.typeParameters, node.heritageClauses, node.members);
                        return [ts.visitEachChild(classNode, visitor, context), decoratorStaticNode];
                    }
                }
                if (ts.isPropertyDeclaration(node)) {
                    if (node.decorators) {
                        const inputDecorator = getDecoratorMetaData("Input" /* INPUT */, node);
                        if (inputDecorator) {
                            const decoratorStaticNode = factory.createGetAccessorDeclaration(undefined, [factory.createModifier(ts.SyntaxKind.StaticKeyword)], factory.createIdentifier('inputProp'), [], undefined, factory.createBlock([factory.createReturnStatement(factory.createStringLiteral(node.name.getText()))], true));
                            return [decoratorStaticNode, ts.visitEachChild(node, visitor, context)];
                        }
                    }
                }
                return ts.visitEachChild(node, visitor, context);
            };
            return ts.visitNode(sourceFile, visitor);
        };
    };
    exports.default = astTransformer;
});