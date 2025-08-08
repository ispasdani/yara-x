/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as chatHistories from "../chatHistories.js";
import type * as contractAnalyses from "../contractAnalyses.js";
import type * as contractAnalyzeGemini from "../contractAnalyzeGemini.js";
import type * as creditTransactions from "../creditTransactions.js";
import type * as documentAnalyses from "../documentAnalyses.js";
import type * as documentShares from "../documentShares.js";
import type * as http from "../http.js";
import type * as organizationMember from "../organizationMember.js";
import type * as organizations from "../organizations.js";
import type * as researchResults from "../researchResults.js";
import type * as schemas from "../schemas.js";
import type * as tasks from "../tasks.js";
import type * as templates from "../templates.js";
import type * as users from "../users.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  chatHistories: typeof chatHistories;
  contractAnalyses: typeof contractAnalyses;
  contractAnalyzeGemini: typeof contractAnalyzeGemini;
  creditTransactions: typeof creditTransactions;
  documentAnalyses: typeof documentAnalyses;
  documentShares: typeof documentShares;
  http: typeof http;
  organizationMember: typeof organizationMember;
  organizations: typeof organizations;
  researchResults: typeof researchResults;
  schemas: typeof schemas;
  tasks: typeof tasks;
  templates: typeof templates;
  users: typeof users;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
