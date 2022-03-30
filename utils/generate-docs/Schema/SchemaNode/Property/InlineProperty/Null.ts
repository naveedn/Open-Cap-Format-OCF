import SchemaNode from "../../SchemaNode.js";
import InlineProperty from "./InlineProperty.js";

interface Schema {
  findSchemaNodeById: (id: string) => SchemaNode;
}

export interface NullJson {
  description: string;
  type: "null";
}

export default class NullProperty extends InlineProperty {
  protected readonly json: NullJson;

  constructor(schema: Schema, json: NullJson, idOverride?: string) {
    super(schema, json, idOverride);
    this.json = json;
  }

  markdownTableType = () => `\`NULL\` _(${this.description()})_`;
}
