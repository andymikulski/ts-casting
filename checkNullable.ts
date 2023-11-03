import { PropertySignature, Type, ts } from "ts-morph";

// project.addSourceFileAtPath(
//   path.resolve(__dirname, "./interfaces.ts")
// );
const nullRegex = /\s*\|\s*null\s*|\s*null\s*\|\s*/ig;
export const checkNullable = (type: Type<ts.Type>, prop: PropertySignature) => type.isNull() || type.isNullable() || nullRegex.test(prop.getTypeNodeOrThrow().getText());
