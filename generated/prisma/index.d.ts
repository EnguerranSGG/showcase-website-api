
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Partner
 * 
 */
export type Partner = $Result.DefaultSelection<Prisma.$PartnerPayload>
/**
 * Model Time
 * 
 */
export type Time = $Result.DefaultSelection<Prisma.$TimePayload>
/**
 * Model Job_offer
 * 
 */
export type Job_offer = $Result.DefaultSelection<Prisma.$Job_offerPayload>
/**
 * Model Structure
 * 
 */
export type Structure = $Result.DefaultSelection<Prisma.$StructurePayload>
/**
 * Model Statistic
 * 
 */
export type Statistic = $Result.DefaultSelection<Prisma.$StatisticPayload>
/**
 * Model News
 * 
 */
export type News = $Result.DefaultSelection<Prisma.$NewsPayload>
/**
 * Model Value
 * 
 */
export type Value = $Result.DefaultSelection<Prisma.$ValuePayload>
/**
 * Model Position
 * 
 */
export type Position = $Result.DefaultSelection<Prisma.$PositionPayload>
/**
 * Model Job
 * 
 */
export type Job = $Result.DefaultSelection<Prisma.$JobPayload>
/**
 * Model Step
 * 
 */
export type Step = $Result.DefaultSelection<Prisma.$StepPayload>
/**
 * Model Path
 * 
 */
export type Path = $Result.DefaultSelection<Prisma.$PathPayload>
/**
 * Model File
 * 
 */
export type File = $Result.DefaultSelection<Prisma.$FilePayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.partner`: Exposes CRUD operations for the **Partner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Partners
    * const partners = await prisma.partner.findMany()
    * ```
    */
  get partner(): Prisma.PartnerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.time`: Exposes CRUD operations for the **Time** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Times
    * const times = await prisma.time.findMany()
    * ```
    */
  get time(): Prisma.TimeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job_offer`: Exposes CRUD operations for the **Job_offer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Job_offers
    * const job_offers = await prisma.job_offer.findMany()
    * ```
    */
  get job_offer(): Prisma.Job_offerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.structure`: Exposes CRUD operations for the **Structure** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Structures
    * const structures = await prisma.structure.findMany()
    * ```
    */
  get structure(): Prisma.StructureDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.statistic`: Exposes CRUD operations for the **Statistic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statistics
    * const statistics = await prisma.statistic.findMany()
    * ```
    */
  get statistic(): Prisma.StatisticDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.news`: Exposes CRUD operations for the **News** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more News
    * const news = await prisma.news.findMany()
    * ```
    */
  get news(): Prisma.NewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.value`: Exposes CRUD operations for the **Value** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Values
    * const values = await prisma.value.findMany()
    * ```
    */
  get value(): Prisma.ValueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.position`: Exposes CRUD operations for the **Position** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Positions
    * const positions = await prisma.position.findMany()
    * ```
    */
  get position(): Prisma.PositionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.job`: Exposes CRUD operations for the **Job** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Jobs
    * const jobs = await prisma.job.findMany()
    * ```
    */
  get job(): Prisma.JobDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.step`: Exposes CRUD operations for the **Step** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Steps
    * const steps = await prisma.step.findMany()
    * ```
    */
  get step(): Prisma.StepDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.path`: Exposes CRUD operations for the **Path** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paths
    * const paths = await prisma.path.findMany()
    * ```
    */
  get path(): Prisma.PathDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Partner: 'Partner',
    Time: 'Time',
    Job_offer: 'Job_offer',
    Structure: 'Structure',
    Statistic: 'Statistic',
    News: 'News',
    Value: 'Value',
    Position: 'Position',
    Job: 'Job',
    Step: 'Step',
    Path: 'Path',
    File: 'File',
    Type: 'Type'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "partner" | "time" | "job_offer" | "structure" | "statistic" | "news" | "value" | "position" | "job" | "step" | "path" | "file" | "type"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Partner: {
        payload: Prisma.$PartnerPayload<ExtArgs>
        fields: Prisma.PartnerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PartnerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PartnerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findFirst: {
            args: Prisma.PartnerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PartnerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          findMany: {
            args: Prisma.PartnerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          create: {
            args: Prisma.PartnerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          createMany: {
            args: Prisma.PartnerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PartnerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          delete: {
            args: Prisma.PartnerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          update: {
            args: Prisma.PartnerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          deleteMany: {
            args: Prisma.PartnerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PartnerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PartnerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>[]
          }
          upsert: {
            args: Prisma.PartnerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PartnerPayload>
          }
          aggregate: {
            args: Prisma.PartnerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePartner>
          }
          groupBy: {
            args: Prisma.PartnerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PartnerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PartnerCountArgs<ExtArgs>
            result: $Utils.Optional<PartnerCountAggregateOutputType> | number
          }
        }
      }
      Time: {
        payload: Prisma.$TimePayload<ExtArgs>
        fields: Prisma.TimeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TimeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TimeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload>
          }
          findFirst: {
            args: Prisma.TimeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TimeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload>
          }
          findMany: {
            args: Prisma.TimeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload>[]
          }
          create: {
            args: Prisma.TimeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload>
          }
          createMany: {
            args: Prisma.TimeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TimeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload>[]
          }
          delete: {
            args: Prisma.TimeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload>
          }
          update: {
            args: Prisma.TimeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload>
          }
          deleteMany: {
            args: Prisma.TimeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TimeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TimeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload>[]
          }
          upsert: {
            args: Prisma.TimeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TimePayload>
          }
          aggregate: {
            args: Prisma.TimeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTime>
          }
          groupBy: {
            args: Prisma.TimeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TimeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TimeCountArgs<ExtArgs>
            result: $Utils.Optional<TimeCountAggregateOutputType> | number
          }
        }
      }
      Job_offer: {
        payload: Prisma.$Job_offerPayload<ExtArgs>
        fields: Prisma.Job_offerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Job_offerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Job_offerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          findFirst: {
            args: Prisma.Job_offerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Job_offerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          findMany: {
            args: Prisma.Job_offerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>[]
          }
          create: {
            args: Prisma.Job_offerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          createMany: {
            args: Prisma.Job_offerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Job_offerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>[]
          }
          delete: {
            args: Prisma.Job_offerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          update: {
            args: Prisma.Job_offerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          deleteMany: {
            args: Prisma.Job_offerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Job_offerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Job_offerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>[]
          }
          upsert: {
            args: Prisma.Job_offerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Job_offerPayload>
          }
          aggregate: {
            args: Prisma.Job_offerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob_offer>
          }
          groupBy: {
            args: Prisma.Job_offerGroupByArgs<ExtArgs>
            result: $Utils.Optional<Job_offerGroupByOutputType>[]
          }
          count: {
            args: Prisma.Job_offerCountArgs<ExtArgs>
            result: $Utils.Optional<Job_offerCountAggregateOutputType> | number
          }
        }
      }
      Structure: {
        payload: Prisma.$StructurePayload<ExtArgs>
        fields: Prisma.StructureFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StructureFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StructureFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload>
          }
          findFirst: {
            args: Prisma.StructureFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StructureFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload>
          }
          findMany: {
            args: Prisma.StructureFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload>[]
          }
          create: {
            args: Prisma.StructureCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload>
          }
          createMany: {
            args: Prisma.StructureCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StructureCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload>[]
          }
          delete: {
            args: Prisma.StructureDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload>
          }
          update: {
            args: Prisma.StructureUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload>
          }
          deleteMany: {
            args: Prisma.StructureDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StructureUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StructureUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload>[]
          }
          upsert: {
            args: Prisma.StructureUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StructurePayload>
          }
          aggregate: {
            args: Prisma.StructureAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStructure>
          }
          groupBy: {
            args: Prisma.StructureGroupByArgs<ExtArgs>
            result: $Utils.Optional<StructureGroupByOutputType>[]
          }
          count: {
            args: Prisma.StructureCountArgs<ExtArgs>
            result: $Utils.Optional<StructureCountAggregateOutputType> | number
          }
        }
      }
      Statistic: {
        payload: Prisma.$StatisticPayload<ExtArgs>
        fields: Prisma.StatisticFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatisticFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatisticFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findFirst: {
            args: Prisma.StatisticFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatisticFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          findMany: {
            args: Prisma.StatisticFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          create: {
            args: Prisma.StatisticCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          createMany: {
            args: Prisma.StatisticCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatisticCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          delete: {
            args: Prisma.StatisticDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          update: {
            args: Prisma.StatisticUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          deleteMany: {
            args: Prisma.StatisticDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatisticUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatisticUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>[]
          }
          upsert: {
            args: Prisma.StatisticUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatisticPayload>
          }
          aggregate: {
            args: Prisma.StatisticAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatistic>
          }
          groupBy: {
            args: Prisma.StatisticGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatisticGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatisticCountArgs<ExtArgs>
            result: $Utils.Optional<StatisticCountAggregateOutputType> | number
          }
        }
      }
      News: {
        payload: Prisma.$NewsPayload<ExtArgs>
        fields: Prisma.NewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findFirst: {
            args: Prisma.NewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          findMany: {
            args: Prisma.NewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          create: {
            args: Prisma.NewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          createMany: {
            args: Prisma.NewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          delete: {
            args: Prisma.NewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          update: {
            args: Prisma.NewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          deleteMany: {
            args: Prisma.NewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>[]
          }
          upsert: {
            args: Prisma.NewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsPayload>
          }
          aggregate: {
            args: Prisma.NewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNews>
          }
          groupBy: {
            args: Prisma.NewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsCountArgs<ExtArgs>
            result: $Utils.Optional<NewsCountAggregateOutputType> | number
          }
        }
      }
      Value: {
        payload: Prisma.$ValuePayload<ExtArgs>
        fields: Prisma.ValueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ValueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ValueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findFirst: {
            args: Prisma.ValueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ValueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          findMany: {
            args: Prisma.ValueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          create: {
            args: Prisma.ValueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          createMany: {
            args: Prisma.ValueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ValueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          delete: {
            args: Prisma.ValueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          update: {
            args: Prisma.ValueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          deleteMany: {
            args: Prisma.ValueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ValueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ValueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>[]
          }
          upsert: {
            args: Prisma.ValueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ValuePayload>
          }
          aggregate: {
            args: Prisma.ValueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateValue>
          }
          groupBy: {
            args: Prisma.ValueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ValueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ValueCountArgs<ExtArgs>
            result: $Utils.Optional<ValueCountAggregateOutputType> | number
          }
        }
      }
      Position: {
        payload: Prisma.$PositionPayload<ExtArgs>
        fields: Prisma.PositionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PositionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PositionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findFirst: {
            args: Prisma.PositionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PositionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          findMany: {
            args: Prisma.PositionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          create: {
            args: Prisma.PositionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          createMany: {
            args: Prisma.PositionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PositionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          delete: {
            args: Prisma.PositionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          update: {
            args: Prisma.PositionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          deleteMany: {
            args: Prisma.PositionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PositionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PositionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>[]
          }
          upsert: {
            args: Prisma.PositionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PositionPayload>
          }
          aggregate: {
            args: Prisma.PositionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosition>
          }
          groupBy: {
            args: Prisma.PositionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PositionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PositionCountArgs<ExtArgs>
            result: $Utils.Optional<PositionCountAggregateOutputType> | number
          }
        }
      }
      Job: {
        payload: Prisma.$JobPayload<ExtArgs>
        fields: Prisma.JobFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JobFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JobFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findFirst: {
            args: Prisma.JobFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JobFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          findMany: {
            args: Prisma.JobFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          create: {
            args: Prisma.JobCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          createMany: {
            args: Prisma.JobCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.JobCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          delete: {
            args: Prisma.JobDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          update: {
            args: Prisma.JobUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          deleteMany: {
            args: Prisma.JobDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.JobUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.JobUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>[]
          }
          upsert: {
            args: Prisma.JobUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$JobPayload>
          }
          aggregate: {
            args: Prisma.JobAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateJob>
          }
          groupBy: {
            args: Prisma.JobGroupByArgs<ExtArgs>
            result: $Utils.Optional<JobGroupByOutputType>[]
          }
          count: {
            args: Prisma.JobCountArgs<ExtArgs>
            result: $Utils.Optional<JobCountAggregateOutputType> | number
          }
        }
      }
      Step: {
        payload: Prisma.$StepPayload<ExtArgs>
        fields: Prisma.StepFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StepFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StepFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findFirst: {
            args: Prisma.StepFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StepFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          findMany: {
            args: Prisma.StepFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          create: {
            args: Prisma.StepCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          createMany: {
            args: Prisma.StepCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StepCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          delete: {
            args: Prisma.StepDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          update: {
            args: Prisma.StepUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          deleteMany: {
            args: Prisma.StepDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StepUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StepUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>[]
          }
          upsert: {
            args: Prisma.StepUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StepPayload>
          }
          aggregate: {
            args: Prisma.StepAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStep>
          }
          groupBy: {
            args: Prisma.StepGroupByArgs<ExtArgs>
            result: $Utils.Optional<StepGroupByOutputType>[]
          }
          count: {
            args: Prisma.StepCountArgs<ExtArgs>
            result: $Utils.Optional<StepCountAggregateOutputType> | number
          }
        }
      }
      Path: {
        payload: Prisma.$PathPayload<ExtArgs>
        fields: Prisma.PathFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PathFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PathFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload>
          }
          findFirst: {
            args: Prisma.PathFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PathFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload>
          }
          findMany: {
            args: Prisma.PathFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload>[]
          }
          create: {
            args: Prisma.PathCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload>
          }
          createMany: {
            args: Prisma.PathCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PathCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload>[]
          }
          delete: {
            args: Prisma.PathDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload>
          }
          update: {
            args: Prisma.PathUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload>
          }
          deleteMany: {
            args: Prisma.PathDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PathUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PathUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload>[]
          }
          upsert: {
            args: Prisma.PathUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PathPayload>
          }
          aggregate: {
            args: Prisma.PathAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePath>
          }
          groupBy: {
            args: Prisma.PathGroupByArgs<ExtArgs>
            result: $Utils.Optional<PathGroupByOutputType>[]
          }
          count: {
            args: Prisma.PathCountArgs<ExtArgs>
            result: $Utils.Optional<PathCountAggregateOutputType> | number
          }
        }
      }
      File: {
        payload: Prisma.$FilePayload<ExtArgs>
        fields: Prisma.FileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findFirst: {
            args: Prisma.FileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          findMany: {
            args: Prisma.FileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          create: {
            args: Prisma.FileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          createMany: {
            args: Prisma.FileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          delete: {
            args: Prisma.FileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          update: {
            args: Prisma.FileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          deleteMany: {
            args: Prisma.FileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>[]
          }
          upsert: {
            args: Prisma.FileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilePayload>
          }
          aggregate: {
            args: Prisma.FileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFile>
          }
          groupBy: {
            args: Prisma.FileGroupByArgs<ExtArgs>
            result: $Utils.Optional<FileGroupByOutputType>[]
          }
          count: {
            args: Prisma.FileCountArgs<ExtArgs>
            result: $Utils.Optional<FileCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    partner?: PartnerOmit
    time?: TimeOmit
    job_offer?: Job_offerOmit
    structure?: StructureOmit
    statistic?: StatisticOmit
    news?: NewsOmit
    value?: ValueOmit
    position?: PositionOmit
    job?: JobOmit
    step?: StepOmit
    path?: PathOmit
    file?: FileOmit
    type?: TypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    partners: number
    times: number
    jobOffers: number
    structures: number
    statistics: number
    news: number
    values: number
    jobs: number
    steps: number
    files: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partners?: boolean | UserCountOutputTypeCountPartnersArgs
    times?: boolean | UserCountOutputTypeCountTimesArgs
    jobOffers?: boolean | UserCountOutputTypeCountJobOffersArgs
    structures?: boolean | UserCountOutputTypeCountStructuresArgs
    statistics?: boolean | UserCountOutputTypeCountStatisticsArgs
    news?: boolean | UserCountOutputTypeCountNewsArgs
    values?: boolean | UserCountOutputTypeCountValuesArgs
    jobs?: boolean | UserCountOutputTypeCountJobsArgs
    steps?: boolean | UserCountOutputTypeCountStepsArgs
    files?: boolean | UserCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPartnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTimesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_offerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStructuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StructureWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
  }


  /**
   * Count Type PositionCountOutputType
   */

  export type PositionCountOutputType = {
    jobs: number
  }

  export type PositionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | PositionCountOutputTypeCountJobsArgs
  }

  // Custom InputTypes
  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PositionCountOutputType
     */
    select?: PositionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PositionCountOutputType without action
   */
  export type PositionCountOutputTypeCountJobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
  }


  /**
   * Count Type PathCountOutputType
   */

  export type PathCountOutputType = {
    steps: number
  }

  export type PathCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | PathCountOutputTypeCountStepsArgs
  }

  // Custom InputTypes
  /**
   * PathCountOutputType without action
   */
  export type PathCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PathCountOutputType
     */
    select?: PathCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PathCountOutputType without action
   */
  export type PathCountOutputTypeCountStepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
  }


  /**
   * Count Type TypeCountOutputType
   */

  export type TypeCountOutputType = {
    statistics: number
  }

  export type TypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statistics?: boolean | TypeCountOutputTypeCountStatisticsArgs
  }

  // Custom InputTypes
  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TypeCountOutputType
     */
    select?: TypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TypeCountOutputType without action
   */
  export type TypeCountOutputTypeCountStatisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    user_id: string | null
    firstname: string | null
    lastname: string | null
    mail: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    user_id: string | null
    firstname: string | null
    lastname: string | null
    mail: string | null
    password: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    user_id: number
    firstname: number
    lastname: number
    mail: number
    password: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    user_id?: true
    firstname?: true
    lastname?: true
    mail?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    user_id?: true
    firstname?: true
    lastname?: true
    mail?: true
    password?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    user_id?: true
    firstname?: true
    lastname?: true
    mail?: true
    password?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    user_id: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date
    updated_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    firstname?: boolean
    lastname?: boolean
    mail?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
    partners?: boolean | User$partnersArgs<ExtArgs>
    times?: boolean | User$timesArgs<ExtArgs>
    jobOffers?: boolean | User$jobOffersArgs<ExtArgs>
    structures?: boolean | User$structuresArgs<ExtArgs>
    statistics?: boolean | User$statisticsArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    values?: boolean | User$valuesArgs<ExtArgs>
    jobs?: boolean | User$jobsArgs<ExtArgs>
    steps?: boolean | User$stepsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    firstname?: boolean
    lastname?: boolean
    mail?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    firstname?: boolean
    lastname?: boolean
    mail?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    user_id?: boolean
    firstname?: boolean
    lastname?: boolean
    mail?: boolean
    password?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"user_id" | "firstname" | "lastname" | "mail" | "password" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    partners?: boolean | User$partnersArgs<ExtArgs>
    times?: boolean | User$timesArgs<ExtArgs>
    jobOffers?: boolean | User$jobOffersArgs<ExtArgs>
    structures?: boolean | User$structuresArgs<ExtArgs>
    statistics?: boolean | User$statisticsArgs<ExtArgs>
    news?: boolean | User$newsArgs<ExtArgs>
    values?: boolean | User$valuesArgs<ExtArgs>
    jobs?: boolean | User$jobsArgs<ExtArgs>
    steps?: boolean | User$stepsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      partners: Prisma.$PartnerPayload<ExtArgs>[]
      times: Prisma.$TimePayload<ExtArgs>[]
      jobOffers: Prisma.$Job_offerPayload<ExtArgs>[]
      structures: Prisma.$StructurePayload<ExtArgs>[]
      statistics: Prisma.$StatisticPayload<ExtArgs>[]
      news: Prisma.$NewsPayload<ExtArgs>[]
      values: Prisma.$ValuePayload<ExtArgs>[]
      jobs: Prisma.$JobPayload<ExtArgs>[]
      steps: Prisma.$StepPayload<ExtArgs>[]
      files: Prisma.$FilePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: string
      firstname: string
      lastname: string
      mail: string
      password: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userWithUser_idOnly = await prisma.user.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.createManyAndReturn({
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `user_id`
     * const userWithUser_idOnly = await prisma.user.updateManyAndReturn({
     *   select: { user_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    partners<T extends User$partnersArgs<ExtArgs> = {}>(args?: Subset<T, User$partnersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    times<T extends User$timesArgs<ExtArgs> = {}>(args?: Subset<T, User$timesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobOffers<T extends User$jobOffersArgs<ExtArgs> = {}>(args?: Subset<T, User$jobOffersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    structures<T extends User$structuresArgs<ExtArgs> = {}>(args?: Subset<T, User$structuresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    statistics<T extends User$statisticsArgs<ExtArgs> = {}>(args?: Subset<T, User$statisticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    news<T extends User$newsArgs<ExtArgs> = {}>(args?: Subset<T, User$newsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    values<T extends User$valuesArgs<ExtArgs> = {}>(args?: Subset<T, User$valuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    jobs<T extends User$jobsArgs<ExtArgs> = {}>(args?: Subset<T, User$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    steps<T extends User$stepsArgs<ExtArgs> = {}>(args?: Subset<T, User$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends User$filesArgs<ExtArgs> = {}>(args?: Subset<T, User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly user_id: FieldRef<"User", 'String'>
    readonly firstname: FieldRef<"User", 'String'>
    readonly lastname: FieldRef<"User", 'String'>
    readonly mail: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.partners
   */
  export type User$partnersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    cursor?: PartnerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * User.times
   */
  export type User$timesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    where?: TimeWhereInput
    orderBy?: TimeOrderByWithRelationInput | TimeOrderByWithRelationInput[]
    cursor?: TimeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TimeScalarFieldEnum | TimeScalarFieldEnum[]
  }

  /**
   * User.jobOffers
   */
  export type User$jobOffersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    where?: Job_offerWhereInput
    orderBy?: Job_offerOrderByWithRelationInput | Job_offerOrderByWithRelationInput[]
    cursor?: Job_offerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[]
  }

  /**
   * User.structures
   */
  export type User$structuresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    where?: StructureWhereInput
    orderBy?: StructureOrderByWithRelationInput | StructureOrderByWithRelationInput[]
    cursor?: StructureWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StructureScalarFieldEnum | StructureScalarFieldEnum[]
  }

  /**
   * User.statistics
   */
  export type User$statisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    cursor?: StatisticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * User.news
   */
  export type User$newsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    cursor?: NewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * User.values
   */
  export type User$valuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    cursor?: ValueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * User.jobs
   */
  export type User$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * User.steps
   */
  export type User$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * User.files
   */
  export type User$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    where?: FileWhereInput
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    cursor?: FileWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Partner
   */

  export type AggregatePartner = {
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  export type PartnerAvgAggregateOutputType = {
    parteners_id: number | null
  }

  export type PartnerSumAggregateOutputType = {
    parteners_id: number | null
  }

  export type PartnerMinAggregateOutputType = {
    parteners_id: number | null
    name: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type PartnerMaxAggregateOutputType = {
    parteners_id: number | null
    name: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type PartnerCountAggregateOutputType = {
    parteners_id: number
    name: number
    image_url: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type PartnerAvgAggregateInputType = {
    parteners_id?: true
  }

  export type PartnerSumAggregateInputType = {
    parteners_id?: true
  }

  export type PartnerMinAggregateInputType = {
    parteners_id?: true
    name?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type PartnerMaxAggregateInputType = {
    parteners_id?: true
    name?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type PartnerCountAggregateInputType = {
    parteners_id?: true
    name?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type PartnerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partner to aggregate.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Partners
    **/
    _count?: true | PartnerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PartnerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PartnerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PartnerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PartnerMaxAggregateInputType
  }

  export type GetPartnerAggregateType<T extends PartnerAggregateArgs> = {
        [P in keyof T & keyof AggregatePartner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePartner[P]>
      : GetScalarType<T[P], AggregatePartner[P]>
  }




  export type PartnerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PartnerWhereInput
    orderBy?: PartnerOrderByWithAggregationInput | PartnerOrderByWithAggregationInput[]
    by: PartnerScalarFieldEnum[] | PartnerScalarFieldEnum
    having?: PartnerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PartnerCountAggregateInputType | true
    _avg?: PartnerAvgAggregateInputType
    _sum?: PartnerSumAggregateInputType
    _min?: PartnerMinAggregateInputType
    _max?: PartnerMaxAggregateInputType
  }

  export type PartnerGroupByOutputType = {
    parteners_id: number
    name: string
    image_url: string
    created_at: Date
    updated_at: Date
    user_id: string
    _count: PartnerCountAggregateOutputType | null
    _avg: PartnerAvgAggregateOutputType | null
    _sum: PartnerSumAggregateOutputType | null
    _min: PartnerMinAggregateOutputType | null
    _max: PartnerMaxAggregateOutputType | null
  }

  type GetPartnerGroupByPayload<T extends PartnerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PartnerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PartnerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PartnerGroupByOutputType[P]>
            : GetScalarType<T[P], PartnerGroupByOutputType[P]>
        }
      >
    >


  export type PartnerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parteners_id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parteners_id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    parteners_id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["partner"]>

  export type PartnerSelectScalar = {
    parteners_id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type PartnerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"parteners_id" | "name" | "image_url" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["partner"]>
  export type PartnerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PartnerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PartnerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PartnerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Partner"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      parteners_id: number
      name: string
      image_url: string
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["partner"]>
    composites: {}
  }

  type PartnerGetPayload<S extends boolean | null | undefined | PartnerDefaultArgs> = $Result.GetResult<Prisma.$PartnerPayload, S>

  type PartnerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PartnerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PartnerCountAggregateInputType | true
    }

  export interface PartnerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Partner'], meta: { name: 'Partner' } }
    /**
     * Find zero or one Partner that matches the filter.
     * @param {PartnerFindUniqueArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PartnerFindUniqueArgs>(args: SelectSubset<T, PartnerFindUniqueArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Partner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PartnerFindUniqueOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PartnerFindUniqueOrThrowArgs>(args: SelectSubset<T, PartnerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PartnerFindFirstArgs>(args?: SelectSubset<T, PartnerFindFirstArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Partner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindFirstOrThrowArgs} args - Arguments to find a Partner
     * @example
     * // Get one Partner
     * const partner = await prisma.partner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PartnerFindFirstOrThrowArgs>(args?: SelectSubset<T, PartnerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Partners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Partners
     * const partners = await prisma.partner.findMany()
     * 
     * // Get first 10 Partners
     * const partners = await prisma.partner.findMany({ take: 10 })
     * 
     * // Only select the `parteners_id`
     * const partnerWithParteners_idOnly = await prisma.partner.findMany({ select: { parteners_id: true } })
     * 
     */
    findMany<T extends PartnerFindManyArgs>(args?: SelectSubset<T, PartnerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Partner.
     * @param {PartnerCreateArgs} args - Arguments to create a Partner.
     * @example
     * // Create one Partner
     * const Partner = await prisma.partner.create({
     *   data: {
     *     // ... data to create a Partner
     *   }
     * })
     * 
     */
    create<T extends PartnerCreateArgs>(args: SelectSubset<T, PartnerCreateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Partners.
     * @param {PartnerCreateManyArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PartnerCreateManyArgs>(args?: SelectSubset<T, PartnerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Partners and returns the data saved in the database.
     * @param {PartnerCreateManyAndReturnArgs} args - Arguments to create many Partners.
     * @example
     * // Create many Partners
     * const partner = await prisma.partner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Partners and only return the `parteners_id`
     * const partnerWithParteners_idOnly = await prisma.partner.createManyAndReturn({
     *   select: { parteners_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PartnerCreateManyAndReturnArgs>(args?: SelectSubset<T, PartnerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Partner.
     * @param {PartnerDeleteArgs} args - Arguments to delete one Partner.
     * @example
     * // Delete one Partner
     * const Partner = await prisma.partner.delete({
     *   where: {
     *     // ... filter to delete one Partner
     *   }
     * })
     * 
     */
    delete<T extends PartnerDeleteArgs>(args: SelectSubset<T, PartnerDeleteArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Partner.
     * @param {PartnerUpdateArgs} args - Arguments to update one Partner.
     * @example
     * // Update one Partner
     * const partner = await prisma.partner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PartnerUpdateArgs>(args: SelectSubset<T, PartnerUpdateArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Partners.
     * @param {PartnerDeleteManyArgs} args - Arguments to filter Partners to delete.
     * @example
     * // Delete a few Partners
     * const { count } = await prisma.partner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PartnerDeleteManyArgs>(args?: SelectSubset<T, PartnerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PartnerUpdateManyArgs>(args: SelectSubset<T, PartnerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Partners and returns the data updated in the database.
     * @param {PartnerUpdateManyAndReturnArgs} args - Arguments to update many Partners.
     * @example
     * // Update many Partners
     * const partner = await prisma.partner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Partners and only return the `parteners_id`
     * const partnerWithParteners_idOnly = await prisma.partner.updateManyAndReturn({
     *   select: { parteners_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PartnerUpdateManyAndReturnArgs>(args: SelectSubset<T, PartnerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Partner.
     * @param {PartnerUpsertArgs} args - Arguments to update or create a Partner.
     * @example
     * // Update or create a Partner
     * const partner = await prisma.partner.upsert({
     *   create: {
     *     // ... data to create a Partner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Partner we want to update
     *   }
     * })
     */
    upsert<T extends PartnerUpsertArgs>(args: SelectSubset<T, PartnerUpsertArgs<ExtArgs>>): Prisma__PartnerClient<$Result.GetResult<Prisma.$PartnerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Partners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerCountArgs} args - Arguments to filter Partners to count.
     * @example
     * // Count the number of Partners
     * const count = await prisma.partner.count({
     *   where: {
     *     // ... the filter for the Partners we want to count
     *   }
     * })
    **/
    count<T extends PartnerCountArgs>(
      args?: Subset<T, PartnerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PartnerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PartnerAggregateArgs>(args: Subset<T, PartnerAggregateArgs>): Prisma.PrismaPromise<GetPartnerAggregateType<T>>

    /**
     * Group by Partner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PartnerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PartnerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PartnerGroupByArgs['orderBy'] }
        : { orderBy?: PartnerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PartnerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPartnerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Partner model
   */
  readonly fields: PartnerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Partner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PartnerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Partner model
   */
  interface PartnerFieldRefs {
    readonly parteners_id: FieldRef<"Partner", 'Int'>
    readonly name: FieldRef<"Partner", 'String'>
    readonly image_url: FieldRef<"Partner", 'String'>
    readonly created_at: FieldRef<"Partner", 'DateTime'>
    readonly updated_at: FieldRef<"Partner", 'DateTime'>
    readonly user_id: FieldRef<"Partner", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Partner findUnique
   */
  export type PartnerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findUniqueOrThrow
   */
  export type PartnerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner findFirst
   */
  export type PartnerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findFirstOrThrow
   */
  export type PartnerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partner to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Partners.
     */
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner findMany
   */
  export type PartnerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter, which Partners to fetch.
     */
    where?: PartnerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Partners to fetch.
     */
    orderBy?: PartnerOrderByWithRelationInput | PartnerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Partners.
     */
    cursor?: PartnerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Partners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Partners.
     */
    skip?: number
    distinct?: PartnerScalarFieldEnum | PartnerScalarFieldEnum[]
  }

  /**
   * Partner create
   */
  export type PartnerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The data needed to create a Partner.
     */
    data: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
  }

  /**
   * Partner createMany
   */
  export type PartnerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Partner createManyAndReturn
   */
  export type PartnerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data used to create many Partners.
     */
    data: PartnerCreateManyInput | PartnerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partner update
   */
  export type PartnerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The data needed to update a Partner.
     */
    data: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
    /**
     * Choose, which Partner to update.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner updateMany
   */
  export type PartnerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
  }

  /**
   * Partner updateManyAndReturn
   */
  export type PartnerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * The data used to update Partners.
     */
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyInput>
    /**
     * Filter which Partners to update
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Partner upsert
   */
  export type PartnerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * The filter to search for the Partner to update in case it exists.
     */
    where: PartnerWhereUniqueInput
    /**
     * In case the Partner found by the `where` argument doesn't exist, create a new Partner with this data.
     */
    create: XOR<PartnerCreateInput, PartnerUncheckedCreateInput>
    /**
     * In case the Partner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PartnerUpdateInput, PartnerUncheckedUpdateInput>
  }

  /**
   * Partner delete
   */
  export type PartnerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
    /**
     * Filter which Partner to delete.
     */
    where: PartnerWhereUniqueInput
  }

  /**
   * Partner deleteMany
   */
  export type PartnerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Partners to delete
     */
    where?: PartnerWhereInput
    /**
     * Limit how many Partners to delete.
     */
    limit?: number
  }

  /**
   * Partner without action
   */
  export type PartnerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Partner
     */
    select?: PartnerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Partner
     */
    omit?: PartnerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PartnerInclude<ExtArgs> | null
  }


  /**
   * Model Time
   */

  export type AggregateTime = {
    _count: TimeCountAggregateOutputType | null
    _avg: TimeAvgAggregateOutputType | null
    _sum: TimeSumAggregateOutputType | null
    _min: TimeMinAggregateOutputType | null
    _max: TimeMaxAggregateOutputType | null
  }

  export type TimeAvgAggregateOutputType = {
    time_id: number | null
    year: number | null
  }

  export type TimeSumAggregateOutputType = {
    time_id: number | null
    year: number | null
  }

  export type TimeMinAggregateOutputType = {
    time_id: number | null
    year: number | null
    event_description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type TimeMaxAggregateOutputType = {
    time_id: number | null
    year: number | null
    event_description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type TimeCountAggregateOutputType = {
    time_id: number
    year: number
    event_description: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type TimeAvgAggregateInputType = {
    time_id?: true
    year?: true
  }

  export type TimeSumAggregateInputType = {
    time_id?: true
    year?: true
  }

  export type TimeMinAggregateInputType = {
    time_id?: true
    year?: true
    event_description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type TimeMaxAggregateInputType = {
    time_id?: true
    year?: true
    event_description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type TimeCountAggregateInputType = {
    time_id?: true
    year?: true
    event_description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type TimeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Time to aggregate.
     */
    where?: TimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Times to fetch.
     */
    orderBy?: TimeOrderByWithRelationInput | TimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Times
    **/
    _count?: true | TimeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TimeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TimeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TimeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TimeMaxAggregateInputType
  }

  export type GetTimeAggregateType<T extends TimeAggregateArgs> = {
        [P in keyof T & keyof AggregateTime]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTime[P]>
      : GetScalarType<T[P], AggregateTime[P]>
  }




  export type TimeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TimeWhereInput
    orderBy?: TimeOrderByWithAggregationInput | TimeOrderByWithAggregationInput[]
    by: TimeScalarFieldEnum[] | TimeScalarFieldEnum
    having?: TimeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TimeCountAggregateInputType | true
    _avg?: TimeAvgAggregateInputType
    _sum?: TimeSumAggregateInputType
    _min?: TimeMinAggregateInputType
    _max?: TimeMaxAggregateInputType
  }

  export type TimeGroupByOutputType = {
    time_id: number
    year: number
    event_description: string
    created_at: Date
    updated_at: Date
    user_id: string
    _count: TimeCountAggregateOutputType | null
    _avg: TimeAvgAggregateOutputType | null
    _sum: TimeSumAggregateOutputType | null
    _min: TimeMinAggregateOutputType | null
    _max: TimeMaxAggregateOutputType | null
  }

  type GetTimeGroupByPayload<T extends TimeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TimeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TimeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TimeGroupByOutputType[P]>
            : GetScalarType<T[P], TimeGroupByOutputType[P]>
        }
      >
    >


  export type TimeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    time_id?: boolean
    year?: boolean
    event_description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["time"]>

  export type TimeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    time_id?: boolean
    year?: boolean
    event_description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["time"]>

  export type TimeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    time_id?: boolean
    year?: boolean
    event_description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["time"]>

  export type TimeSelectScalar = {
    time_id?: boolean
    year?: boolean
    event_description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type TimeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"time_id" | "year" | "event_description" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["time"]>
  export type TimeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TimeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TimePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Time"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      time_id: number
      year: number
      event_description: string
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["time"]>
    composites: {}
  }

  type TimeGetPayload<S extends boolean | null | undefined | TimeDefaultArgs> = $Result.GetResult<Prisma.$TimePayload, S>

  type TimeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TimeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TimeCountAggregateInputType | true
    }

  export interface TimeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Time'], meta: { name: 'Time' } }
    /**
     * Find zero or one Time that matches the filter.
     * @param {TimeFindUniqueArgs} args - Arguments to find a Time
     * @example
     * // Get one Time
     * const time = await prisma.time.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TimeFindUniqueArgs>(args: SelectSubset<T, TimeFindUniqueArgs<ExtArgs>>): Prisma__TimeClient<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Time that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TimeFindUniqueOrThrowArgs} args - Arguments to find a Time
     * @example
     * // Get one Time
     * const time = await prisma.time.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TimeFindUniqueOrThrowArgs>(args: SelectSubset<T, TimeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TimeClient<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Time that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFindFirstArgs} args - Arguments to find a Time
     * @example
     * // Get one Time
     * const time = await prisma.time.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TimeFindFirstArgs>(args?: SelectSubset<T, TimeFindFirstArgs<ExtArgs>>): Prisma__TimeClient<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Time that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFindFirstOrThrowArgs} args - Arguments to find a Time
     * @example
     * // Get one Time
     * const time = await prisma.time.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TimeFindFirstOrThrowArgs>(args?: SelectSubset<T, TimeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TimeClient<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Times that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Times
     * const times = await prisma.time.findMany()
     * 
     * // Get first 10 Times
     * const times = await prisma.time.findMany({ take: 10 })
     * 
     * // Only select the `time_id`
     * const timeWithTime_idOnly = await prisma.time.findMany({ select: { time_id: true } })
     * 
     */
    findMany<T extends TimeFindManyArgs>(args?: SelectSubset<T, TimeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Time.
     * @param {TimeCreateArgs} args - Arguments to create a Time.
     * @example
     * // Create one Time
     * const Time = await prisma.time.create({
     *   data: {
     *     // ... data to create a Time
     *   }
     * })
     * 
     */
    create<T extends TimeCreateArgs>(args: SelectSubset<T, TimeCreateArgs<ExtArgs>>): Prisma__TimeClient<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Times.
     * @param {TimeCreateManyArgs} args - Arguments to create many Times.
     * @example
     * // Create many Times
     * const time = await prisma.time.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TimeCreateManyArgs>(args?: SelectSubset<T, TimeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Times and returns the data saved in the database.
     * @param {TimeCreateManyAndReturnArgs} args - Arguments to create many Times.
     * @example
     * // Create many Times
     * const time = await prisma.time.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Times and only return the `time_id`
     * const timeWithTime_idOnly = await prisma.time.createManyAndReturn({
     *   select: { time_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TimeCreateManyAndReturnArgs>(args?: SelectSubset<T, TimeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Time.
     * @param {TimeDeleteArgs} args - Arguments to delete one Time.
     * @example
     * // Delete one Time
     * const Time = await prisma.time.delete({
     *   where: {
     *     // ... filter to delete one Time
     *   }
     * })
     * 
     */
    delete<T extends TimeDeleteArgs>(args: SelectSubset<T, TimeDeleteArgs<ExtArgs>>): Prisma__TimeClient<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Time.
     * @param {TimeUpdateArgs} args - Arguments to update one Time.
     * @example
     * // Update one Time
     * const time = await prisma.time.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TimeUpdateArgs>(args: SelectSubset<T, TimeUpdateArgs<ExtArgs>>): Prisma__TimeClient<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Times.
     * @param {TimeDeleteManyArgs} args - Arguments to filter Times to delete.
     * @example
     * // Delete a few Times
     * const { count } = await prisma.time.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TimeDeleteManyArgs>(args?: SelectSubset<T, TimeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Times
     * const time = await prisma.time.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TimeUpdateManyArgs>(args: SelectSubset<T, TimeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Times and returns the data updated in the database.
     * @param {TimeUpdateManyAndReturnArgs} args - Arguments to update many Times.
     * @example
     * // Update many Times
     * const time = await prisma.time.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Times and only return the `time_id`
     * const timeWithTime_idOnly = await prisma.time.updateManyAndReturn({
     *   select: { time_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TimeUpdateManyAndReturnArgs>(args: SelectSubset<T, TimeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Time.
     * @param {TimeUpsertArgs} args - Arguments to update or create a Time.
     * @example
     * // Update or create a Time
     * const time = await prisma.time.upsert({
     *   create: {
     *     // ... data to create a Time
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Time we want to update
     *   }
     * })
     */
    upsert<T extends TimeUpsertArgs>(args: SelectSubset<T, TimeUpsertArgs<ExtArgs>>): Prisma__TimeClient<$Result.GetResult<Prisma.$TimePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Times.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeCountArgs} args - Arguments to filter Times to count.
     * @example
     * // Count the number of Times
     * const count = await prisma.time.count({
     *   where: {
     *     // ... the filter for the Times we want to count
     *   }
     * })
    **/
    count<T extends TimeCountArgs>(
      args?: Subset<T, TimeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TimeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TimeAggregateArgs>(args: Subset<T, TimeAggregateArgs>): Prisma.PrismaPromise<GetTimeAggregateType<T>>

    /**
     * Group by Time.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TimeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TimeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TimeGroupByArgs['orderBy'] }
        : { orderBy?: TimeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TimeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTimeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Time model
   */
  readonly fields: TimeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Time.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TimeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Time model
   */
  interface TimeFieldRefs {
    readonly time_id: FieldRef<"Time", 'Int'>
    readonly year: FieldRef<"Time", 'Int'>
    readonly event_description: FieldRef<"Time", 'String'>
    readonly created_at: FieldRef<"Time", 'DateTime'>
    readonly updated_at: FieldRef<"Time", 'DateTime'>
    readonly user_id: FieldRef<"Time", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Time findUnique
   */
  export type TimeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    /**
     * Filter, which Time to fetch.
     */
    where: TimeWhereUniqueInput
  }

  /**
   * Time findUniqueOrThrow
   */
  export type TimeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    /**
     * Filter, which Time to fetch.
     */
    where: TimeWhereUniqueInput
  }

  /**
   * Time findFirst
   */
  export type TimeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    /**
     * Filter, which Time to fetch.
     */
    where?: TimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Times to fetch.
     */
    orderBy?: TimeOrderByWithRelationInput | TimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Times.
     */
    cursor?: TimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Times.
     */
    distinct?: TimeScalarFieldEnum | TimeScalarFieldEnum[]
  }

  /**
   * Time findFirstOrThrow
   */
  export type TimeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    /**
     * Filter, which Time to fetch.
     */
    where?: TimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Times to fetch.
     */
    orderBy?: TimeOrderByWithRelationInput | TimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Times.
     */
    cursor?: TimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Times.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Times.
     */
    distinct?: TimeScalarFieldEnum | TimeScalarFieldEnum[]
  }

  /**
   * Time findMany
   */
  export type TimeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    /**
     * Filter, which Times to fetch.
     */
    where?: TimeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Times to fetch.
     */
    orderBy?: TimeOrderByWithRelationInput | TimeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Times.
     */
    cursor?: TimeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Times from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Times.
     */
    skip?: number
    distinct?: TimeScalarFieldEnum | TimeScalarFieldEnum[]
  }

  /**
   * Time create
   */
  export type TimeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    /**
     * The data needed to create a Time.
     */
    data: XOR<TimeCreateInput, TimeUncheckedCreateInput>
  }

  /**
   * Time createMany
   */
  export type TimeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Times.
     */
    data: TimeCreateManyInput | TimeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Time createManyAndReturn
   */
  export type TimeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * The data used to create many Times.
     */
    data: TimeCreateManyInput | TimeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Time update
   */
  export type TimeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    /**
     * The data needed to update a Time.
     */
    data: XOR<TimeUpdateInput, TimeUncheckedUpdateInput>
    /**
     * Choose, which Time to update.
     */
    where: TimeWhereUniqueInput
  }

  /**
   * Time updateMany
   */
  export type TimeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Times.
     */
    data: XOR<TimeUpdateManyMutationInput, TimeUncheckedUpdateManyInput>
    /**
     * Filter which Times to update
     */
    where?: TimeWhereInput
    /**
     * Limit how many Times to update.
     */
    limit?: number
  }

  /**
   * Time updateManyAndReturn
   */
  export type TimeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * The data used to update Times.
     */
    data: XOR<TimeUpdateManyMutationInput, TimeUncheckedUpdateManyInput>
    /**
     * Filter which Times to update
     */
    where?: TimeWhereInput
    /**
     * Limit how many Times to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Time upsert
   */
  export type TimeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    /**
     * The filter to search for the Time to update in case it exists.
     */
    where: TimeWhereUniqueInput
    /**
     * In case the Time found by the `where` argument doesn't exist, create a new Time with this data.
     */
    create: XOR<TimeCreateInput, TimeUncheckedCreateInput>
    /**
     * In case the Time was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TimeUpdateInput, TimeUncheckedUpdateInput>
  }

  /**
   * Time delete
   */
  export type TimeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
    /**
     * Filter which Time to delete.
     */
    where: TimeWhereUniqueInput
  }

  /**
   * Time deleteMany
   */
  export type TimeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Times to delete
     */
    where?: TimeWhereInput
    /**
     * Limit how many Times to delete.
     */
    limit?: number
  }

  /**
   * Time without action
   */
  export type TimeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Time
     */
    select?: TimeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Time
     */
    omit?: TimeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TimeInclude<ExtArgs> | null
  }


  /**
   * Model Job_offer
   */

  export type AggregateJob_offer = {
    _count: Job_offerCountAggregateOutputType | null
    _avg: Job_offerAvgAggregateOutputType | null
    _sum: Job_offerSumAggregateOutputType | null
    _min: Job_offerMinAggregateOutputType | null
    _max: Job_offerMaxAggregateOutputType | null
  }

  export type Job_offerAvgAggregateOutputType = {
    job_offer_id: number | null
  }

  export type Job_offerSumAggregateOutputType = {
    job_offer_id: number | null
  }

  export type Job_offerMinAggregateOutputType = {
    job_offer_id: number | null
    name: string | null
    job_type: string | null
    city: string | null
    image_url: string | null
    link: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type Job_offerMaxAggregateOutputType = {
    job_offer_id: number | null
    name: string | null
    job_type: string | null
    city: string | null
    image_url: string | null
    link: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type Job_offerCountAggregateOutputType = {
    job_offer_id: number
    name: number
    job_type: number
    city: number
    image_url: number
    link: number
    description: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type Job_offerAvgAggregateInputType = {
    job_offer_id?: true
  }

  export type Job_offerSumAggregateInputType = {
    job_offer_id?: true
  }

  export type Job_offerMinAggregateInputType = {
    job_offer_id?: true
    name?: true
    job_type?: true
    city?: true
    image_url?: true
    link?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type Job_offerMaxAggregateInputType = {
    job_offer_id?: true
    name?: true
    job_type?: true
    city?: true
    image_url?: true
    link?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type Job_offerCountAggregateInputType = {
    job_offer_id?: true
    name?: true
    job_type?: true
    city?: true
    image_url?: true
    link?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type Job_offerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_offer to aggregate.
     */
    where?: Job_offerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_offers to fetch.
     */
    orderBy?: Job_offerOrderByWithRelationInput | Job_offerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Job_offerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Job_offers
    **/
    _count?: true | Job_offerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Job_offerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Job_offerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Job_offerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Job_offerMaxAggregateInputType
  }

  export type GetJob_offerAggregateType<T extends Job_offerAggregateArgs> = {
        [P in keyof T & keyof AggregateJob_offer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob_offer[P]>
      : GetScalarType<T[P], AggregateJob_offer[P]>
  }




  export type Job_offerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Job_offerWhereInput
    orderBy?: Job_offerOrderByWithAggregationInput | Job_offerOrderByWithAggregationInput[]
    by: Job_offerScalarFieldEnum[] | Job_offerScalarFieldEnum
    having?: Job_offerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Job_offerCountAggregateInputType | true
    _avg?: Job_offerAvgAggregateInputType
    _sum?: Job_offerSumAggregateInputType
    _min?: Job_offerMinAggregateInputType
    _max?: Job_offerMaxAggregateInputType
  }

  export type Job_offerGroupByOutputType = {
    job_offer_id: number
    name: string
    job_type: string
    city: string | null
    image_url: string | null
    link: string | null
    description: string
    created_at: Date
    updated_at: Date
    user_id: string
    _count: Job_offerCountAggregateOutputType | null
    _avg: Job_offerAvgAggregateOutputType | null
    _sum: Job_offerSumAggregateOutputType | null
    _min: Job_offerMinAggregateOutputType | null
    _max: Job_offerMaxAggregateOutputType | null
  }

  type GetJob_offerGroupByPayload<T extends Job_offerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Job_offerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Job_offerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Job_offerGroupByOutputType[P]>
            : GetScalarType<T[P], Job_offerGroupByOutputType[P]>
        }
      >
    >


  export type Job_offerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_offer_id?: boolean
    name?: boolean
    job_type?: boolean
    city?: boolean
    image_url?: boolean
    link?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_offer"]>

  export type Job_offerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_offer_id?: boolean
    name?: boolean
    job_type?: boolean
    city?: boolean
    image_url?: boolean
    link?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_offer"]>

  export type Job_offerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_offer_id?: boolean
    name?: boolean
    job_type?: boolean
    city?: boolean
    image_url?: boolean
    link?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job_offer"]>

  export type Job_offerSelectScalar = {
    job_offer_id?: boolean
    name?: boolean
    job_type?: boolean
    city?: boolean
    image_url?: boolean
    link?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type Job_offerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"job_offer_id" | "name" | "job_type" | "city" | "image_url" | "link" | "description" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["job_offer"]>
  export type Job_offerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Job_offerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Job_offerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Job_offerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job_offer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      job_offer_id: number
      name: string
      job_type: string
      city: string | null
      image_url: string | null
      link: string | null
      description: string
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["job_offer"]>
    composites: {}
  }

  type Job_offerGetPayload<S extends boolean | null | undefined | Job_offerDefaultArgs> = $Result.GetResult<Prisma.$Job_offerPayload, S>

  type Job_offerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Job_offerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Job_offerCountAggregateInputType | true
    }

  export interface Job_offerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job_offer'], meta: { name: 'Job_offer' } }
    /**
     * Find zero or one Job_offer that matches the filter.
     * @param {Job_offerFindUniqueArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Job_offerFindUniqueArgs>(args: SelectSubset<T, Job_offerFindUniqueArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job_offer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Job_offerFindUniqueOrThrowArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Job_offerFindUniqueOrThrowArgs>(args: SelectSubset<T, Job_offerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_offer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerFindFirstArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Job_offerFindFirstArgs>(args?: SelectSubset<T, Job_offerFindFirstArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job_offer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerFindFirstOrThrowArgs} args - Arguments to find a Job_offer
     * @example
     * // Get one Job_offer
     * const job_offer = await prisma.job_offer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Job_offerFindFirstOrThrowArgs>(args?: SelectSubset<T, Job_offerFindFirstOrThrowArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Job_offers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Job_offers
     * const job_offers = await prisma.job_offer.findMany()
     * 
     * // Get first 10 Job_offers
     * const job_offers = await prisma.job_offer.findMany({ take: 10 })
     * 
     * // Only select the `job_offer_id`
     * const job_offerWithJob_offer_idOnly = await prisma.job_offer.findMany({ select: { job_offer_id: true } })
     * 
     */
    findMany<T extends Job_offerFindManyArgs>(args?: SelectSubset<T, Job_offerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job_offer.
     * @param {Job_offerCreateArgs} args - Arguments to create a Job_offer.
     * @example
     * // Create one Job_offer
     * const Job_offer = await prisma.job_offer.create({
     *   data: {
     *     // ... data to create a Job_offer
     *   }
     * })
     * 
     */
    create<T extends Job_offerCreateArgs>(args: SelectSubset<T, Job_offerCreateArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Job_offers.
     * @param {Job_offerCreateManyArgs} args - Arguments to create many Job_offers.
     * @example
     * // Create many Job_offers
     * const job_offer = await prisma.job_offer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Job_offerCreateManyArgs>(args?: SelectSubset<T, Job_offerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Job_offers and returns the data saved in the database.
     * @param {Job_offerCreateManyAndReturnArgs} args - Arguments to create many Job_offers.
     * @example
     * // Create many Job_offers
     * const job_offer = await prisma.job_offer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Job_offers and only return the `job_offer_id`
     * const job_offerWithJob_offer_idOnly = await prisma.job_offer.createManyAndReturn({
     *   select: { job_offer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Job_offerCreateManyAndReturnArgs>(args?: SelectSubset<T, Job_offerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job_offer.
     * @param {Job_offerDeleteArgs} args - Arguments to delete one Job_offer.
     * @example
     * // Delete one Job_offer
     * const Job_offer = await prisma.job_offer.delete({
     *   where: {
     *     // ... filter to delete one Job_offer
     *   }
     * })
     * 
     */
    delete<T extends Job_offerDeleteArgs>(args: SelectSubset<T, Job_offerDeleteArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job_offer.
     * @param {Job_offerUpdateArgs} args - Arguments to update one Job_offer.
     * @example
     * // Update one Job_offer
     * const job_offer = await prisma.job_offer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Job_offerUpdateArgs>(args: SelectSubset<T, Job_offerUpdateArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Job_offers.
     * @param {Job_offerDeleteManyArgs} args - Arguments to filter Job_offers to delete.
     * @example
     * // Delete a few Job_offers
     * const { count } = await prisma.job_offer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Job_offerDeleteManyArgs>(args?: SelectSubset<T, Job_offerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Job_offers
     * const job_offer = await prisma.job_offer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Job_offerUpdateManyArgs>(args: SelectSubset<T, Job_offerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Job_offers and returns the data updated in the database.
     * @param {Job_offerUpdateManyAndReturnArgs} args - Arguments to update many Job_offers.
     * @example
     * // Update many Job_offers
     * const job_offer = await prisma.job_offer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Job_offers and only return the `job_offer_id`
     * const job_offerWithJob_offer_idOnly = await prisma.job_offer.updateManyAndReturn({
     *   select: { job_offer_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Job_offerUpdateManyAndReturnArgs>(args: SelectSubset<T, Job_offerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job_offer.
     * @param {Job_offerUpsertArgs} args - Arguments to update or create a Job_offer.
     * @example
     * // Update or create a Job_offer
     * const job_offer = await prisma.job_offer.upsert({
     *   create: {
     *     // ... data to create a Job_offer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job_offer we want to update
     *   }
     * })
     */
    upsert<T extends Job_offerUpsertArgs>(args: SelectSubset<T, Job_offerUpsertArgs<ExtArgs>>): Prisma__Job_offerClient<$Result.GetResult<Prisma.$Job_offerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Job_offers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerCountArgs} args - Arguments to filter Job_offers to count.
     * @example
     * // Count the number of Job_offers
     * const count = await prisma.job_offer.count({
     *   where: {
     *     // ... the filter for the Job_offers we want to count
     *   }
     * })
    **/
    count<T extends Job_offerCountArgs>(
      args?: Subset<T, Job_offerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Job_offerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job_offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Job_offerAggregateArgs>(args: Subset<T, Job_offerAggregateArgs>): Prisma.PrismaPromise<GetJob_offerAggregateType<T>>

    /**
     * Group by Job_offer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Job_offerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Job_offerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Job_offerGroupByArgs['orderBy'] }
        : { orderBy?: Job_offerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Job_offerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJob_offerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job_offer model
   */
  readonly fields: Job_offerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job_offer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Job_offerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job_offer model
   */
  interface Job_offerFieldRefs {
    readonly job_offer_id: FieldRef<"Job_offer", 'Int'>
    readonly name: FieldRef<"Job_offer", 'String'>
    readonly job_type: FieldRef<"Job_offer", 'String'>
    readonly city: FieldRef<"Job_offer", 'String'>
    readonly image_url: FieldRef<"Job_offer", 'String'>
    readonly link: FieldRef<"Job_offer", 'String'>
    readonly description: FieldRef<"Job_offer", 'String'>
    readonly created_at: FieldRef<"Job_offer", 'DateTime'>
    readonly updated_at: FieldRef<"Job_offer", 'DateTime'>
    readonly user_id: FieldRef<"Job_offer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Job_offer findUnique
   */
  export type Job_offerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offer to fetch.
     */
    where: Job_offerWhereUniqueInput
  }

  /**
   * Job_offer findUniqueOrThrow
   */
  export type Job_offerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offer to fetch.
     */
    where: Job_offerWhereUniqueInput
  }

  /**
   * Job_offer findFirst
   */
  export type Job_offerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offer to fetch.
     */
    where?: Job_offerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_offers to fetch.
     */
    orderBy?: Job_offerOrderByWithRelationInput | Job_offerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_offers.
     */
    cursor?: Job_offerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_offers.
     */
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[]
  }

  /**
   * Job_offer findFirstOrThrow
   */
  export type Job_offerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offer to fetch.
     */
    where?: Job_offerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_offers to fetch.
     */
    orderBy?: Job_offerOrderByWithRelationInput | Job_offerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Job_offers.
     */
    cursor?: Job_offerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_offers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Job_offers.
     */
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[]
  }

  /**
   * Job_offer findMany
   */
  export type Job_offerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter, which Job_offers to fetch.
     */
    where?: Job_offerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Job_offers to fetch.
     */
    orderBy?: Job_offerOrderByWithRelationInput | Job_offerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Job_offers.
     */
    cursor?: Job_offerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Job_offers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Job_offers.
     */
    skip?: number
    distinct?: Job_offerScalarFieldEnum | Job_offerScalarFieldEnum[]
  }

  /**
   * Job_offer create
   */
  export type Job_offerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * The data needed to create a Job_offer.
     */
    data: XOR<Job_offerCreateInput, Job_offerUncheckedCreateInput>
  }

  /**
   * Job_offer createMany
   */
  export type Job_offerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Job_offers.
     */
    data: Job_offerCreateManyInput | Job_offerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job_offer createManyAndReturn
   */
  export type Job_offerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * The data used to create many Job_offers.
     */
    data: Job_offerCreateManyInput | Job_offerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job_offer update
   */
  export type Job_offerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * The data needed to update a Job_offer.
     */
    data: XOR<Job_offerUpdateInput, Job_offerUncheckedUpdateInput>
    /**
     * Choose, which Job_offer to update.
     */
    where: Job_offerWhereUniqueInput
  }

  /**
   * Job_offer updateMany
   */
  export type Job_offerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Job_offers.
     */
    data: XOR<Job_offerUpdateManyMutationInput, Job_offerUncheckedUpdateManyInput>
    /**
     * Filter which Job_offers to update
     */
    where?: Job_offerWhereInput
    /**
     * Limit how many Job_offers to update.
     */
    limit?: number
  }

  /**
   * Job_offer updateManyAndReturn
   */
  export type Job_offerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * The data used to update Job_offers.
     */
    data: XOR<Job_offerUpdateManyMutationInput, Job_offerUncheckedUpdateManyInput>
    /**
     * Filter which Job_offers to update
     */
    where?: Job_offerWhereInput
    /**
     * Limit how many Job_offers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job_offer upsert
   */
  export type Job_offerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * The filter to search for the Job_offer to update in case it exists.
     */
    where: Job_offerWhereUniqueInput
    /**
     * In case the Job_offer found by the `where` argument doesn't exist, create a new Job_offer with this data.
     */
    create: XOR<Job_offerCreateInput, Job_offerUncheckedCreateInput>
    /**
     * In case the Job_offer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Job_offerUpdateInput, Job_offerUncheckedUpdateInput>
  }

  /**
   * Job_offer delete
   */
  export type Job_offerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
    /**
     * Filter which Job_offer to delete.
     */
    where: Job_offerWhereUniqueInput
  }

  /**
   * Job_offer deleteMany
   */
  export type Job_offerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job_offers to delete
     */
    where?: Job_offerWhereInput
    /**
     * Limit how many Job_offers to delete.
     */
    limit?: number
  }

  /**
   * Job_offer without action
   */
  export type Job_offerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job_offer
     */
    select?: Job_offerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job_offer
     */
    omit?: Job_offerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Job_offerInclude<ExtArgs> | null
  }


  /**
   * Model Structure
   */

  export type AggregateStructure = {
    _count: StructureCountAggregateOutputType | null
    _avg: StructureAvgAggregateOutputType | null
    _sum: StructureSumAggregateOutputType | null
    _min: StructureMinAggregateOutputType | null
    _max: StructureMaxAggregateOutputType | null
  }

  export type StructureAvgAggregateOutputType = {
    structure_id: number | null
  }

  export type StructureSumAggregateOutputType = {
    structure_id: number | null
  }

  export type StructureMinAggregateOutputType = {
    structure_id: number | null
    name: string | null
    image_url: string | null
    description: string | null
    address: string | null
    phone_number: string | null
    missions: string | null
    link: string | null
    schedule: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type StructureMaxAggregateOutputType = {
    structure_id: number | null
    name: string | null
    image_url: string | null
    description: string | null
    address: string | null
    phone_number: string | null
    missions: string | null
    link: string | null
    schedule: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type StructureCountAggregateOutputType = {
    structure_id: number
    name: number
    image_url: number
    description: number
    address: number
    phone_number: number
    missions: number
    link: number
    schedule: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type StructureAvgAggregateInputType = {
    structure_id?: true
  }

  export type StructureSumAggregateInputType = {
    structure_id?: true
  }

  export type StructureMinAggregateInputType = {
    structure_id?: true
    name?: true
    image_url?: true
    description?: true
    address?: true
    phone_number?: true
    missions?: true
    link?: true
    schedule?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type StructureMaxAggregateInputType = {
    structure_id?: true
    name?: true
    image_url?: true
    description?: true
    address?: true
    phone_number?: true
    missions?: true
    link?: true
    schedule?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type StructureCountAggregateInputType = {
    structure_id?: true
    name?: true
    image_url?: true
    description?: true
    address?: true
    phone_number?: true
    missions?: true
    link?: true
    schedule?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type StructureAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Structure to aggregate.
     */
    where?: StructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Structures to fetch.
     */
    orderBy?: StructureOrderByWithRelationInput | StructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Structures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Structures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Structures
    **/
    _count?: true | StructureCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StructureAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StructureSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StructureMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StructureMaxAggregateInputType
  }

  export type GetStructureAggregateType<T extends StructureAggregateArgs> = {
        [P in keyof T & keyof AggregateStructure]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStructure[P]>
      : GetScalarType<T[P], AggregateStructure[P]>
  }




  export type StructureGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StructureWhereInput
    orderBy?: StructureOrderByWithAggregationInput | StructureOrderByWithAggregationInput[]
    by: StructureScalarFieldEnum[] | StructureScalarFieldEnum
    having?: StructureScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StructureCountAggregateInputType | true
    _avg?: StructureAvgAggregateInputType
    _sum?: StructureSumAggregateInputType
    _min?: StructureMinAggregateInputType
    _max?: StructureMaxAggregateInputType
  }

  export type StructureGroupByOutputType = {
    structure_id: number
    name: string
    image_url: string | null
    description: string
    address: string | null
    phone_number: string | null
    missions: string | null
    link: string | null
    schedule: string | null
    created_at: Date
    updated_at: Date
    user_id: string
    _count: StructureCountAggregateOutputType | null
    _avg: StructureAvgAggregateOutputType | null
    _sum: StructureSumAggregateOutputType | null
    _min: StructureMinAggregateOutputType | null
    _max: StructureMaxAggregateOutputType | null
  }

  type GetStructureGroupByPayload<T extends StructureGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StructureGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StructureGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StructureGroupByOutputType[P]>
            : GetScalarType<T[P], StructureGroupByOutputType[P]>
        }
      >
    >


  export type StructureSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    structure_id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    address?: boolean
    phone_number?: boolean
    missions?: boolean
    link?: boolean
    schedule?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["structure"]>

  export type StructureSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    structure_id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    address?: boolean
    phone_number?: boolean
    missions?: boolean
    link?: boolean
    schedule?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["structure"]>

  export type StructureSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    structure_id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    address?: boolean
    phone_number?: boolean
    missions?: boolean
    link?: boolean
    schedule?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["structure"]>

  export type StructureSelectScalar = {
    structure_id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    address?: boolean
    phone_number?: boolean
    missions?: boolean
    link?: boolean
    schedule?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type StructureOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"structure_id" | "name" | "image_url" | "description" | "address" | "phone_number" | "missions" | "link" | "schedule" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["structure"]>
  export type StructureInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StructureIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type StructureIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $StructurePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Structure"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      structure_id: number
      name: string
      image_url: string | null
      description: string
      address: string | null
      phone_number: string | null
      missions: string | null
      link: string | null
      schedule: string | null
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["structure"]>
    composites: {}
  }

  type StructureGetPayload<S extends boolean | null | undefined | StructureDefaultArgs> = $Result.GetResult<Prisma.$StructurePayload, S>

  type StructureCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StructureFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StructureCountAggregateInputType | true
    }

  export interface StructureDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Structure'], meta: { name: 'Structure' } }
    /**
     * Find zero or one Structure that matches the filter.
     * @param {StructureFindUniqueArgs} args - Arguments to find a Structure
     * @example
     * // Get one Structure
     * const structure = await prisma.structure.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StructureFindUniqueArgs>(args: SelectSubset<T, StructureFindUniqueArgs<ExtArgs>>): Prisma__StructureClient<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Structure that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StructureFindUniqueOrThrowArgs} args - Arguments to find a Structure
     * @example
     * // Get one Structure
     * const structure = await prisma.structure.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StructureFindUniqueOrThrowArgs>(args: SelectSubset<T, StructureFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StructureClient<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Structure that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructureFindFirstArgs} args - Arguments to find a Structure
     * @example
     * // Get one Structure
     * const structure = await prisma.structure.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StructureFindFirstArgs>(args?: SelectSubset<T, StructureFindFirstArgs<ExtArgs>>): Prisma__StructureClient<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Structure that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructureFindFirstOrThrowArgs} args - Arguments to find a Structure
     * @example
     * // Get one Structure
     * const structure = await prisma.structure.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StructureFindFirstOrThrowArgs>(args?: SelectSubset<T, StructureFindFirstOrThrowArgs<ExtArgs>>): Prisma__StructureClient<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Structures that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructureFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Structures
     * const structures = await prisma.structure.findMany()
     * 
     * // Get first 10 Structures
     * const structures = await prisma.structure.findMany({ take: 10 })
     * 
     * // Only select the `structure_id`
     * const structureWithStructure_idOnly = await prisma.structure.findMany({ select: { structure_id: true } })
     * 
     */
    findMany<T extends StructureFindManyArgs>(args?: SelectSubset<T, StructureFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Structure.
     * @param {StructureCreateArgs} args - Arguments to create a Structure.
     * @example
     * // Create one Structure
     * const Structure = await prisma.structure.create({
     *   data: {
     *     // ... data to create a Structure
     *   }
     * })
     * 
     */
    create<T extends StructureCreateArgs>(args: SelectSubset<T, StructureCreateArgs<ExtArgs>>): Prisma__StructureClient<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Structures.
     * @param {StructureCreateManyArgs} args - Arguments to create many Structures.
     * @example
     * // Create many Structures
     * const structure = await prisma.structure.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StructureCreateManyArgs>(args?: SelectSubset<T, StructureCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Structures and returns the data saved in the database.
     * @param {StructureCreateManyAndReturnArgs} args - Arguments to create many Structures.
     * @example
     * // Create many Structures
     * const structure = await prisma.structure.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Structures and only return the `structure_id`
     * const structureWithStructure_idOnly = await prisma.structure.createManyAndReturn({
     *   select: { structure_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StructureCreateManyAndReturnArgs>(args?: SelectSubset<T, StructureCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Structure.
     * @param {StructureDeleteArgs} args - Arguments to delete one Structure.
     * @example
     * // Delete one Structure
     * const Structure = await prisma.structure.delete({
     *   where: {
     *     // ... filter to delete one Structure
     *   }
     * })
     * 
     */
    delete<T extends StructureDeleteArgs>(args: SelectSubset<T, StructureDeleteArgs<ExtArgs>>): Prisma__StructureClient<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Structure.
     * @param {StructureUpdateArgs} args - Arguments to update one Structure.
     * @example
     * // Update one Structure
     * const structure = await prisma.structure.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StructureUpdateArgs>(args: SelectSubset<T, StructureUpdateArgs<ExtArgs>>): Prisma__StructureClient<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Structures.
     * @param {StructureDeleteManyArgs} args - Arguments to filter Structures to delete.
     * @example
     * // Delete a few Structures
     * const { count } = await prisma.structure.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StructureDeleteManyArgs>(args?: SelectSubset<T, StructureDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Structures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructureUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Structures
     * const structure = await prisma.structure.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StructureUpdateManyArgs>(args: SelectSubset<T, StructureUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Structures and returns the data updated in the database.
     * @param {StructureUpdateManyAndReturnArgs} args - Arguments to update many Structures.
     * @example
     * // Update many Structures
     * const structure = await prisma.structure.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Structures and only return the `structure_id`
     * const structureWithStructure_idOnly = await prisma.structure.updateManyAndReturn({
     *   select: { structure_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StructureUpdateManyAndReturnArgs>(args: SelectSubset<T, StructureUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Structure.
     * @param {StructureUpsertArgs} args - Arguments to update or create a Structure.
     * @example
     * // Update or create a Structure
     * const structure = await prisma.structure.upsert({
     *   create: {
     *     // ... data to create a Structure
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Structure we want to update
     *   }
     * })
     */
    upsert<T extends StructureUpsertArgs>(args: SelectSubset<T, StructureUpsertArgs<ExtArgs>>): Prisma__StructureClient<$Result.GetResult<Prisma.$StructurePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Structures.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructureCountArgs} args - Arguments to filter Structures to count.
     * @example
     * // Count the number of Structures
     * const count = await prisma.structure.count({
     *   where: {
     *     // ... the filter for the Structures we want to count
     *   }
     * })
    **/
    count<T extends StructureCountArgs>(
      args?: Subset<T, StructureCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StructureCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Structure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructureAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StructureAggregateArgs>(args: Subset<T, StructureAggregateArgs>): Prisma.PrismaPromise<GetStructureAggregateType<T>>

    /**
     * Group by Structure.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StructureGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StructureGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StructureGroupByArgs['orderBy'] }
        : { orderBy?: StructureGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StructureGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStructureGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Structure model
   */
  readonly fields: StructureFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Structure.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StructureClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Structure model
   */
  interface StructureFieldRefs {
    readonly structure_id: FieldRef<"Structure", 'Int'>
    readonly name: FieldRef<"Structure", 'String'>
    readonly image_url: FieldRef<"Structure", 'String'>
    readonly description: FieldRef<"Structure", 'String'>
    readonly address: FieldRef<"Structure", 'String'>
    readonly phone_number: FieldRef<"Structure", 'String'>
    readonly missions: FieldRef<"Structure", 'String'>
    readonly link: FieldRef<"Structure", 'String'>
    readonly schedule: FieldRef<"Structure", 'String'>
    readonly created_at: FieldRef<"Structure", 'DateTime'>
    readonly updated_at: FieldRef<"Structure", 'DateTime'>
    readonly user_id: FieldRef<"Structure", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Structure findUnique
   */
  export type StructureFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    /**
     * Filter, which Structure to fetch.
     */
    where: StructureWhereUniqueInput
  }

  /**
   * Structure findUniqueOrThrow
   */
  export type StructureFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    /**
     * Filter, which Structure to fetch.
     */
    where: StructureWhereUniqueInput
  }

  /**
   * Structure findFirst
   */
  export type StructureFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    /**
     * Filter, which Structure to fetch.
     */
    where?: StructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Structures to fetch.
     */
    orderBy?: StructureOrderByWithRelationInput | StructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Structures.
     */
    cursor?: StructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Structures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Structures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Structures.
     */
    distinct?: StructureScalarFieldEnum | StructureScalarFieldEnum[]
  }

  /**
   * Structure findFirstOrThrow
   */
  export type StructureFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    /**
     * Filter, which Structure to fetch.
     */
    where?: StructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Structures to fetch.
     */
    orderBy?: StructureOrderByWithRelationInput | StructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Structures.
     */
    cursor?: StructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Structures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Structures.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Structures.
     */
    distinct?: StructureScalarFieldEnum | StructureScalarFieldEnum[]
  }

  /**
   * Structure findMany
   */
  export type StructureFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    /**
     * Filter, which Structures to fetch.
     */
    where?: StructureWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Structures to fetch.
     */
    orderBy?: StructureOrderByWithRelationInput | StructureOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Structures.
     */
    cursor?: StructureWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Structures from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Structures.
     */
    skip?: number
    distinct?: StructureScalarFieldEnum | StructureScalarFieldEnum[]
  }

  /**
   * Structure create
   */
  export type StructureCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    /**
     * The data needed to create a Structure.
     */
    data: XOR<StructureCreateInput, StructureUncheckedCreateInput>
  }

  /**
   * Structure createMany
   */
  export type StructureCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Structures.
     */
    data: StructureCreateManyInput | StructureCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Structure createManyAndReturn
   */
  export type StructureCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * The data used to create many Structures.
     */
    data: StructureCreateManyInput | StructureCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Structure update
   */
  export type StructureUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    /**
     * The data needed to update a Structure.
     */
    data: XOR<StructureUpdateInput, StructureUncheckedUpdateInput>
    /**
     * Choose, which Structure to update.
     */
    where: StructureWhereUniqueInput
  }

  /**
   * Structure updateMany
   */
  export type StructureUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Structures.
     */
    data: XOR<StructureUpdateManyMutationInput, StructureUncheckedUpdateManyInput>
    /**
     * Filter which Structures to update
     */
    where?: StructureWhereInput
    /**
     * Limit how many Structures to update.
     */
    limit?: number
  }

  /**
   * Structure updateManyAndReturn
   */
  export type StructureUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * The data used to update Structures.
     */
    data: XOR<StructureUpdateManyMutationInput, StructureUncheckedUpdateManyInput>
    /**
     * Filter which Structures to update
     */
    where?: StructureWhereInput
    /**
     * Limit how many Structures to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Structure upsert
   */
  export type StructureUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    /**
     * The filter to search for the Structure to update in case it exists.
     */
    where: StructureWhereUniqueInput
    /**
     * In case the Structure found by the `where` argument doesn't exist, create a new Structure with this data.
     */
    create: XOR<StructureCreateInput, StructureUncheckedCreateInput>
    /**
     * In case the Structure was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StructureUpdateInput, StructureUncheckedUpdateInput>
  }

  /**
   * Structure delete
   */
  export type StructureDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
    /**
     * Filter which Structure to delete.
     */
    where: StructureWhereUniqueInput
  }

  /**
   * Structure deleteMany
   */
  export type StructureDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Structures to delete
     */
    where?: StructureWhereInput
    /**
     * Limit how many Structures to delete.
     */
    limit?: number
  }

  /**
   * Structure without action
   */
  export type StructureDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Structure
     */
    select?: StructureSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Structure
     */
    omit?: StructureOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StructureInclude<ExtArgs> | null
  }


  /**
   * Model Statistic
   */

  export type AggregateStatistic = {
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  export type StatisticAvgAggregateOutputType = {
    statistic_id: number | null
    value: number | null
    year: number | null
    type_id: number | null
  }

  export type StatisticSumAggregateOutputType = {
    statistic_id: number | null
    value: number | null
    year: number | null
    type_id: number | null
  }

  export type StatisticMinAggregateOutputType = {
    statistic_id: number | null
    label: string | null
    value: number | null
    year: number | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    type_id: number | null
  }

  export type StatisticMaxAggregateOutputType = {
    statistic_id: number | null
    label: string | null
    value: number | null
    year: number | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    type_id: number | null
  }

  export type StatisticCountAggregateOutputType = {
    statistic_id: number
    label: number
    value: number
    year: number
    created_at: number
    updated_at: number
    user_id: number
    type_id: number
    _all: number
  }


  export type StatisticAvgAggregateInputType = {
    statistic_id?: true
    value?: true
    year?: true
    type_id?: true
  }

  export type StatisticSumAggregateInputType = {
    statistic_id?: true
    value?: true
    year?: true
    type_id?: true
  }

  export type StatisticMinAggregateInputType = {
    statistic_id?: true
    label?: true
    value?: true
    year?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    type_id?: true
  }

  export type StatisticMaxAggregateInputType = {
    statistic_id?: true
    label?: true
    value?: true
    year?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    type_id?: true
  }

  export type StatisticCountAggregateInputType = {
    statistic_id?: true
    label?: true
    value?: true
    year?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    type_id?: true
    _all?: true
  }

  export type StatisticAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistic to aggregate.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statistics
    **/
    _count?: true | StatisticCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StatisticAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StatisticSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatisticMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatisticMaxAggregateInputType
  }

  export type GetStatisticAggregateType<T extends StatisticAggregateArgs> = {
        [P in keyof T & keyof AggregateStatistic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatistic[P]>
      : GetScalarType<T[P], AggregateStatistic[P]>
  }




  export type StatisticGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithAggregationInput | StatisticOrderByWithAggregationInput[]
    by: StatisticScalarFieldEnum[] | StatisticScalarFieldEnum
    having?: StatisticScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatisticCountAggregateInputType | true
    _avg?: StatisticAvgAggregateInputType
    _sum?: StatisticSumAggregateInputType
    _min?: StatisticMinAggregateInputType
    _max?: StatisticMaxAggregateInputType
  }

  export type StatisticGroupByOutputType = {
    statistic_id: number
    label: string
    value: number
    year: number
    created_at: Date
    updated_at: Date
    user_id: string
    type_id: number
    _count: StatisticCountAggregateOutputType | null
    _avg: StatisticAvgAggregateOutputType | null
    _sum: StatisticSumAggregateOutputType | null
    _min: StatisticMinAggregateOutputType | null
    _max: StatisticMaxAggregateOutputType | null
  }

  type GetStatisticGroupByPayload<T extends StatisticGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatisticGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatisticGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatisticGroupByOutputType[P]>
            : GetScalarType<T[P], StatisticGroupByOutputType[P]>
        }
      >
    >


  export type StatisticSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statistic_id?: boolean
    label?: boolean
    value?: boolean
    year?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    type_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statistic_id?: boolean
    label?: boolean
    value?: boolean
    year?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    type_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    statistic_id?: boolean
    label?: boolean
    value?: boolean
    year?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    type_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["statistic"]>

  export type StatisticSelectScalar = {
    statistic_id?: boolean
    label?: boolean
    value?: boolean
    year?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    type_id?: boolean
  }

  export type StatisticOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"statistic_id" | "label" | "value" | "year" | "created_at" | "updated_at" | "user_id" | "type_id", ExtArgs["result"]["statistic"]>
  export type StatisticInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }
  export type StatisticIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }
  export type StatisticIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | TypeDefaultArgs<ExtArgs>
  }

  export type $StatisticPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Statistic"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      type: Prisma.$TypePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      statistic_id: number
      label: string
      value: number
      year: number
      created_at: Date
      updated_at: Date
      user_id: string
      type_id: number
    }, ExtArgs["result"]["statistic"]>
    composites: {}
  }

  type StatisticGetPayload<S extends boolean | null | undefined | StatisticDefaultArgs> = $Result.GetResult<Prisma.$StatisticPayload, S>

  type StatisticCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatisticFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatisticCountAggregateInputType | true
    }

  export interface StatisticDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Statistic'], meta: { name: 'Statistic' } }
    /**
     * Find zero or one Statistic that matches the filter.
     * @param {StatisticFindUniqueArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatisticFindUniqueArgs>(args: SelectSubset<T, StatisticFindUniqueArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Statistic that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatisticFindUniqueOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatisticFindUniqueOrThrowArgs>(args: SelectSubset<T, StatisticFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatisticFindFirstArgs>(args?: SelectSubset<T, StatisticFindFirstArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Statistic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindFirstOrThrowArgs} args - Arguments to find a Statistic
     * @example
     * // Get one Statistic
     * const statistic = await prisma.statistic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatisticFindFirstOrThrowArgs>(args?: SelectSubset<T, StatisticFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statistics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statistics
     * const statistics = await prisma.statistic.findMany()
     * 
     * // Get first 10 Statistics
     * const statistics = await prisma.statistic.findMany({ take: 10 })
     * 
     * // Only select the `statistic_id`
     * const statisticWithStatistic_idOnly = await prisma.statistic.findMany({ select: { statistic_id: true } })
     * 
     */
    findMany<T extends StatisticFindManyArgs>(args?: SelectSubset<T, StatisticFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Statistic.
     * @param {StatisticCreateArgs} args - Arguments to create a Statistic.
     * @example
     * // Create one Statistic
     * const Statistic = await prisma.statistic.create({
     *   data: {
     *     // ... data to create a Statistic
     *   }
     * })
     * 
     */
    create<T extends StatisticCreateArgs>(args: SelectSubset<T, StatisticCreateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statistics.
     * @param {StatisticCreateManyArgs} args - Arguments to create many Statistics.
     * @example
     * // Create many Statistics
     * const statistic = await prisma.statistic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatisticCreateManyArgs>(args?: SelectSubset<T, StatisticCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statistics and returns the data saved in the database.
     * @param {StatisticCreateManyAndReturnArgs} args - Arguments to create many Statistics.
     * @example
     * // Create many Statistics
     * const statistic = await prisma.statistic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statistics and only return the `statistic_id`
     * const statisticWithStatistic_idOnly = await prisma.statistic.createManyAndReturn({
     *   select: { statistic_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatisticCreateManyAndReturnArgs>(args?: SelectSubset<T, StatisticCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Statistic.
     * @param {StatisticDeleteArgs} args - Arguments to delete one Statistic.
     * @example
     * // Delete one Statistic
     * const Statistic = await prisma.statistic.delete({
     *   where: {
     *     // ... filter to delete one Statistic
     *   }
     * })
     * 
     */
    delete<T extends StatisticDeleteArgs>(args: SelectSubset<T, StatisticDeleteArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Statistic.
     * @param {StatisticUpdateArgs} args - Arguments to update one Statistic.
     * @example
     * // Update one Statistic
     * const statistic = await prisma.statistic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatisticUpdateArgs>(args: SelectSubset<T, StatisticUpdateArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statistics.
     * @param {StatisticDeleteManyArgs} args - Arguments to filter Statistics to delete.
     * @example
     * // Delete a few Statistics
     * const { count } = await prisma.statistic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatisticDeleteManyArgs>(args?: SelectSubset<T, StatisticDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatisticUpdateManyArgs>(args: SelectSubset<T, StatisticUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statistics and returns the data updated in the database.
     * @param {StatisticUpdateManyAndReturnArgs} args - Arguments to update many Statistics.
     * @example
     * // Update many Statistics
     * const statistic = await prisma.statistic.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statistics and only return the `statistic_id`
     * const statisticWithStatistic_idOnly = await prisma.statistic.updateManyAndReturn({
     *   select: { statistic_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StatisticUpdateManyAndReturnArgs>(args: SelectSubset<T, StatisticUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Statistic.
     * @param {StatisticUpsertArgs} args - Arguments to update or create a Statistic.
     * @example
     * // Update or create a Statistic
     * const statistic = await prisma.statistic.upsert({
     *   create: {
     *     // ... data to create a Statistic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Statistic we want to update
     *   }
     * })
     */
    upsert<T extends StatisticUpsertArgs>(args: SelectSubset<T, StatisticUpsertArgs<ExtArgs>>): Prisma__StatisticClient<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statistics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticCountArgs} args - Arguments to filter Statistics to count.
     * @example
     * // Count the number of Statistics
     * const count = await prisma.statistic.count({
     *   where: {
     *     // ... the filter for the Statistics we want to count
     *   }
     * })
    **/
    count<T extends StatisticCountArgs>(
      args?: Subset<T, StatisticCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatisticCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StatisticAggregateArgs>(args: Subset<T, StatisticAggregateArgs>): Prisma.PrismaPromise<GetStatisticAggregateType<T>>

    /**
     * Group by Statistic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatisticGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StatisticGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatisticGroupByArgs['orderBy'] }
        : { orderBy?: StatisticGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StatisticGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatisticGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Statistic model
   */
  readonly fields: StatisticFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Statistic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatisticClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    type<T extends TypeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TypeDefaultArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Statistic model
   */
  interface StatisticFieldRefs {
    readonly statistic_id: FieldRef<"Statistic", 'Int'>
    readonly label: FieldRef<"Statistic", 'String'>
    readonly value: FieldRef<"Statistic", 'Int'>
    readonly year: FieldRef<"Statistic", 'Int'>
    readonly created_at: FieldRef<"Statistic", 'DateTime'>
    readonly updated_at: FieldRef<"Statistic", 'DateTime'>
    readonly user_id: FieldRef<"Statistic", 'String'>
    readonly type_id: FieldRef<"Statistic", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Statistic findUnique
   */
  export type StatisticFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findUniqueOrThrow
   */
  export type StatisticFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic findFirst
   */
  export type StatisticFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findFirstOrThrow
   */
  export type StatisticFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistic to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statistics.
     */
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic findMany
   */
  export type StatisticFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter, which Statistics to fetch.
     */
    where?: StatisticWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statistics to fetch.
     */
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statistics.
     */
    cursor?: StatisticWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statistics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statistics.
     */
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Statistic create
   */
  export type StatisticCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to create a Statistic.
     */
    data: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
  }

  /**
   * Statistic createMany
   */
  export type StatisticCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Statistic createManyAndReturn
   */
  export type StatisticCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * The data used to create many Statistics.
     */
    data: StatisticCreateManyInput | StatisticCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Statistic update
   */
  export type StatisticUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The data needed to update a Statistic.
     */
    data: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
    /**
     * Choose, which Statistic to update.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic updateMany
   */
  export type StatisticUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to update.
     */
    limit?: number
  }

  /**
   * Statistic updateManyAndReturn
   */
  export type StatisticUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * The data used to update Statistics.
     */
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyInput>
    /**
     * Filter which Statistics to update
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Statistic upsert
   */
  export type StatisticUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * The filter to search for the Statistic to update in case it exists.
     */
    where: StatisticWhereUniqueInput
    /**
     * In case the Statistic found by the `where` argument doesn't exist, create a new Statistic with this data.
     */
    create: XOR<StatisticCreateInput, StatisticUncheckedCreateInput>
    /**
     * In case the Statistic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatisticUpdateInput, StatisticUncheckedUpdateInput>
  }

  /**
   * Statistic delete
   */
  export type StatisticDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    /**
     * Filter which Statistic to delete.
     */
    where: StatisticWhereUniqueInput
  }

  /**
   * Statistic deleteMany
   */
  export type StatisticDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statistics to delete
     */
    where?: StatisticWhereInput
    /**
     * Limit how many Statistics to delete.
     */
    limit?: number
  }

  /**
   * Statistic without action
   */
  export type StatisticDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
  }


  /**
   * Model News
   */

  export type AggregateNews = {
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  export type NewsAvgAggregateOutputType = {
    news_id: number | null
  }

  export type NewsSumAggregateOutputType = {
    news_id: number | null
  }

  export type NewsMinAggregateOutputType = {
    news_id: number | null
    name: string | null
    image_url: string | null
    link: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type NewsMaxAggregateOutputType = {
    news_id: number | null
    name: string | null
    image_url: string | null
    link: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type NewsCountAggregateOutputType = {
    news_id: number
    name: number
    image_url: number
    link: number
    description: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type NewsAvgAggregateInputType = {
    news_id?: true
  }

  export type NewsSumAggregateInputType = {
    news_id?: true
  }

  export type NewsMinAggregateInputType = {
    news_id?: true
    name?: true
    image_url?: true
    link?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type NewsMaxAggregateInputType = {
    news_id?: true
    name?: true
    image_url?: true
    link?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type NewsCountAggregateInputType = {
    news_id?: true
    name?: true
    image_url?: true
    link?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type NewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to aggregate.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned News
    **/
    _count?: true | NewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsMaxAggregateInputType
  }

  export type GetNewsAggregateType<T extends NewsAggregateArgs> = {
        [P in keyof T & keyof AggregateNews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNews[P]>
      : GetScalarType<T[P], AggregateNews[P]>
  }




  export type NewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsWhereInput
    orderBy?: NewsOrderByWithAggregationInput | NewsOrderByWithAggregationInput[]
    by: NewsScalarFieldEnum[] | NewsScalarFieldEnum
    having?: NewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsCountAggregateInputType | true
    _avg?: NewsAvgAggregateInputType
    _sum?: NewsSumAggregateInputType
    _min?: NewsMinAggregateInputType
    _max?: NewsMaxAggregateInputType
  }

  export type NewsGroupByOutputType = {
    news_id: number
    name: string
    image_url: string | null
    link: string | null
    description: string
    created_at: Date
    updated_at: Date
    user_id: string
    _count: NewsCountAggregateOutputType | null
    _avg: NewsAvgAggregateOutputType | null
    _sum: NewsSumAggregateOutputType | null
    _min: NewsMinAggregateOutputType | null
    _max: NewsMaxAggregateOutputType | null
  }

  type GetNewsGroupByPayload<T extends NewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsGroupByOutputType[P]>
            : GetScalarType<T[P], NewsGroupByOutputType[P]>
        }
      >
    >


  export type NewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    news_id?: boolean
    name?: boolean
    image_url?: boolean
    link?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    news_id?: boolean
    name?: boolean
    image_url?: boolean
    link?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    news_id?: boolean
    name?: boolean
    image_url?: boolean
    link?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["news"]>

  export type NewsSelectScalar = {
    news_id?: boolean
    name?: boolean
    image_url?: boolean
    link?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type NewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"news_id" | "name" | "image_url" | "link" | "description" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["news"]>
  export type NewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "News"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      news_id: number
      name: string
      image_url: string | null
      link: string | null
      description: string
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["news"]>
    composites: {}
  }

  type NewsGetPayload<S extends boolean | null | undefined | NewsDefaultArgs> = $Result.GetResult<Prisma.$NewsPayload, S>

  type NewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsCountAggregateInputType | true
    }

  export interface NewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['News'], meta: { name: 'News' } }
    /**
     * Find zero or one News that matches the filter.
     * @param {NewsFindUniqueArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsFindUniqueArgs>(args: SelectSubset<T, NewsFindUniqueArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one News that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsFindUniqueOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsFindFirstArgs>(args?: SelectSubset<T, NewsFindFirstArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first News that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindFirstOrThrowArgs} args - Arguments to find a News
     * @example
     * // Get one News
     * const news = await prisma.news.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more News that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all News
     * const news = await prisma.news.findMany()
     * 
     * // Get first 10 News
     * const news = await prisma.news.findMany({ take: 10 })
     * 
     * // Only select the `news_id`
     * const newsWithNews_idOnly = await prisma.news.findMany({ select: { news_id: true } })
     * 
     */
    findMany<T extends NewsFindManyArgs>(args?: SelectSubset<T, NewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a News.
     * @param {NewsCreateArgs} args - Arguments to create a News.
     * @example
     * // Create one News
     * const News = await prisma.news.create({
     *   data: {
     *     // ... data to create a News
     *   }
     * })
     * 
     */
    create<T extends NewsCreateArgs>(args: SelectSubset<T, NewsCreateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many News.
     * @param {NewsCreateManyArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsCreateManyArgs>(args?: SelectSubset<T, NewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many News and returns the data saved in the database.
     * @param {NewsCreateManyAndReturnArgs} args - Arguments to create many News.
     * @example
     * // Create many News
     * const news = await prisma.news.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many News and only return the `news_id`
     * const newsWithNews_idOnly = await prisma.news.createManyAndReturn({
     *   select: { news_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a News.
     * @param {NewsDeleteArgs} args - Arguments to delete one News.
     * @example
     * // Delete one News
     * const News = await prisma.news.delete({
     *   where: {
     *     // ... filter to delete one News
     *   }
     * })
     * 
     */
    delete<T extends NewsDeleteArgs>(args: SelectSubset<T, NewsDeleteArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one News.
     * @param {NewsUpdateArgs} args - Arguments to update one News.
     * @example
     * // Update one News
     * const news = await prisma.news.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsUpdateArgs>(args: SelectSubset<T, NewsUpdateArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more News.
     * @param {NewsDeleteManyArgs} args - Arguments to filter News to delete.
     * @example
     * // Delete a few News
     * const { count } = await prisma.news.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsDeleteManyArgs>(args?: SelectSubset<T, NewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many News
     * const news = await prisma.news.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsUpdateManyArgs>(args: SelectSubset<T, NewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more News and returns the data updated in the database.
     * @param {NewsUpdateManyAndReturnArgs} args - Arguments to update many News.
     * @example
     * // Update many News
     * const news = await prisma.news.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more News and only return the `news_id`
     * const newsWithNews_idOnly = await prisma.news.updateManyAndReturn({
     *   select: { news_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one News.
     * @param {NewsUpsertArgs} args - Arguments to update or create a News.
     * @example
     * // Update or create a News
     * const news = await prisma.news.upsert({
     *   create: {
     *     // ... data to create a News
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the News we want to update
     *   }
     * })
     */
    upsert<T extends NewsUpsertArgs>(args: SelectSubset<T, NewsUpsertArgs<ExtArgs>>): Prisma__NewsClient<$Result.GetResult<Prisma.$NewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsCountArgs} args - Arguments to filter News to count.
     * @example
     * // Count the number of News
     * const count = await prisma.news.count({
     *   where: {
     *     // ... the filter for the News we want to count
     *   }
     * })
    **/
    count<T extends NewsCountArgs>(
      args?: Subset<T, NewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsAggregateArgs>(args: Subset<T, NewsAggregateArgs>): Prisma.PrismaPromise<GetNewsAggregateType<T>>

    /**
     * Group by News.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsGroupByArgs['orderBy'] }
        : { orderBy?: NewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the News model
   */
  readonly fields: NewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for News.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the News model
   */
  interface NewsFieldRefs {
    readonly news_id: FieldRef<"News", 'Int'>
    readonly name: FieldRef<"News", 'String'>
    readonly image_url: FieldRef<"News", 'String'>
    readonly link: FieldRef<"News", 'String'>
    readonly description: FieldRef<"News", 'String'>
    readonly created_at: FieldRef<"News", 'DateTime'>
    readonly updated_at: FieldRef<"News", 'DateTime'>
    readonly user_id: FieldRef<"News", 'String'>
  }
    

  // Custom InputTypes
  /**
   * News findUnique
   */
  export type NewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findUniqueOrThrow
   */
  export type NewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News findFirst
   */
  export type NewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findFirstOrThrow
   */
  export type NewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of News.
     */
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News findMany
   */
  export type NewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter, which News to fetch.
     */
    where?: NewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of News to fetch.
     */
    orderBy?: NewsOrderByWithRelationInput | NewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing News.
     */
    cursor?: NewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` News from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` News.
     */
    skip?: number
    distinct?: NewsScalarFieldEnum | NewsScalarFieldEnum[]
  }

  /**
   * News create
   */
  export type NewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to create a News.
     */
    data: XOR<NewsCreateInput, NewsUncheckedCreateInput>
  }

  /**
   * News createMany
   */
  export type NewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * News createManyAndReturn
   */
  export type NewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to create many News.
     */
    data: NewsCreateManyInput | NewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * News update
   */
  export type NewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The data needed to update a News.
     */
    data: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
    /**
     * Choose, which News to update.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News updateMany
   */
  export type NewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
  }

  /**
   * News updateManyAndReturn
   */
  export type NewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * The data used to update News.
     */
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyInput>
    /**
     * Filter which News to update
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * News upsert
   */
  export type NewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * The filter to search for the News to update in case it exists.
     */
    where: NewsWhereUniqueInput
    /**
     * In case the News found by the `where` argument doesn't exist, create a new News with this data.
     */
    create: XOR<NewsCreateInput, NewsUncheckedCreateInput>
    /**
     * In case the News was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsUpdateInput, NewsUncheckedUpdateInput>
  }

  /**
   * News delete
   */
  export type NewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
    /**
     * Filter which News to delete.
     */
    where: NewsWhereUniqueInput
  }

  /**
   * News deleteMany
   */
  export type NewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which News to delete
     */
    where?: NewsWhereInput
    /**
     * Limit how many News to delete.
     */
    limit?: number
  }

  /**
   * News without action
   */
  export type NewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the News
     */
    select?: NewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the News
     */
    omit?: NewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsInclude<ExtArgs> | null
  }


  /**
   * Model Value
   */

  export type AggregateValue = {
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  export type ValueAvgAggregateOutputType = {
    value_id: number | null
  }

  export type ValueSumAggregateOutputType = {
    value_id: number | null
  }

  export type ValueMinAggregateOutputType = {
    value_id: number | null
    name: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type ValueMaxAggregateOutputType = {
    value_id: number | null
    name: string | null
    image_url: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type ValueCountAggregateOutputType = {
    value_id: number
    name: number
    image_url: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type ValueAvgAggregateInputType = {
    value_id?: true
  }

  export type ValueSumAggregateInputType = {
    value_id?: true
  }

  export type ValueMinAggregateInputType = {
    value_id?: true
    name?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ValueMaxAggregateInputType = {
    value_id?: true
    name?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type ValueCountAggregateInputType = {
    value_id?: true
    name?: true
    image_url?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type ValueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Value to aggregate.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Values
    **/
    _count?: true | ValueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ValueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ValueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ValueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ValueMaxAggregateInputType
  }

  export type GetValueAggregateType<T extends ValueAggregateArgs> = {
        [P in keyof T & keyof AggregateValue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateValue[P]>
      : GetScalarType<T[P], AggregateValue[P]>
  }




  export type ValueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ValueWhereInput
    orderBy?: ValueOrderByWithAggregationInput | ValueOrderByWithAggregationInput[]
    by: ValueScalarFieldEnum[] | ValueScalarFieldEnum
    having?: ValueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ValueCountAggregateInputType | true
    _avg?: ValueAvgAggregateInputType
    _sum?: ValueSumAggregateInputType
    _min?: ValueMinAggregateInputType
    _max?: ValueMaxAggregateInputType
  }

  export type ValueGroupByOutputType = {
    value_id: number
    name: string
    image_url: string | null
    created_at: Date
    updated_at: Date
    user_id: string
    _count: ValueCountAggregateOutputType | null
    _avg: ValueAvgAggregateOutputType | null
    _sum: ValueSumAggregateOutputType | null
    _min: ValueMinAggregateOutputType | null
    _max: ValueMaxAggregateOutputType | null
  }

  type GetValueGroupByPayload<T extends ValueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ValueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ValueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ValueGroupByOutputType[P]>
            : GetScalarType<T[P], ValueGroupByOutputType[P]>
        }
      >
    >


  export type ValueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    value_id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>

  export type ValueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    value_id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>

  export type ValueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    value_id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["value"]>

  export type ValueSelectScalar = {
    value_id?: boolean
    name?: boolean
    image_url?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type ValueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"value_id" | "name" | "image_url" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["value"]>
  export type ValueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ValueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ValueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ValuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Value"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      value_id: number
      name: string
      image_url: string | null
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["value"]>
    composites: {}
  }

  type ValueGetPayload<S extends boolean | null | undefined | ValueDefaultArgs> = $Result.GetResult<Prisma.$ValuePayload, S>

  type ValueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ValueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ValueCountAggregateInputType | true
    }

  export interface ValueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Value'], meta: { name: 'Value' } }
    /**
     * Find zero or one Value that matches the filter.
     * @param {ValueFindUniqueArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ValueFindUniqueArgs>(args: SelectSubset<T, ValueFindUniqueArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Value that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ValueFindUniqueOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ValueFindUniqueOrThrowArgs>(args: SelectSubset<T, ValueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ValueFindFirstArgs>(args?: SelectSubset<T, ValueFindFirstArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Value that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindFirstOrThrowArgs} args - Arguments to find a Value
     * @example
     * // Get one Value
     * const value = await prisma.value.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ValueFindFirstOrThrowArgs>(args?: SelectSubset<T, ValueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Values that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Values
     * const values = await prisma.value.findMany()
     * 
     * // Get first 10 Values
     * const values = await prisma.value.findMany({ take: 10 })
     * 
     * // Only select the `value_id`
     * const valueWithValue_idOnly = await prisma.value.findMany({ select: { value_id: true } })
     * 
     */
    findMany<T extends ValueFindManyArgs>(args?: SelectSubset<T, ValueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Value.
     * @param {ValueCreateArgs} args - Arguments to create a Value.
     * @example
     * // Create one Value
     * const Value = await prisma.value.create({
     *   data: {
     *     // ... data to create a Value
     *   }
     * })
     * 
     */
    create<T extends ValueCreateArgs>(args: SelectSubset<T, ValueCreateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Values.
     * @param {ValueCreateManyArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ValueCreateManyArgs>(args?: SelectSubset<T, ValueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Values and returns the data saved in the database.
     * @param {ValueCreateManyAndReturnArgs} args - Arguments to create many Values.
     * @example
     * // Create many Values
     * const value = await prisma.value.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Values and only return the `value_id`
     * const valueWithValue_idOnly = await prisma.value.createManyAndReturn({
     *   select: { value_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ValueCreateManyAndReturnArgs>(args?: SelectSubset<T, ValueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Value.
     * @param {ValueDeleteArgs} args - Arguments to delete one Value.
     * @example
     * // Delete one Value
     * const Value = await prisma.value.delete({
     *   where: {
     *     // ... filter to delete one Value
     *   }
     * })
     * 
     */
    delete<T extends ValueDeleteArgs>(args: SelectSubset<T, ValueDeleteArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Value.
     * @param {ValueUpdateArgs} args - Arguments to update one Value.
     * @example
     * // Update one Value
     * const value = await prisma.value.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ValueUpdateArgs>(args: SelectSubset<T, ValueUpdateArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Values.
     * @param {ValueDeleteManyArgs} args - Arguments to filter Values to delete.
     * @example
     * // Delete a few Values
     * const { count } = await prisma.value.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ValueDeleteManyArgs>(args?: SelectSubset<T, ValueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ValueUpdateManyArgs>(args: SelectSubset<T, ValueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Values and returns the data updated in the database.
     * @param {ValueUpdateManyAndReturnArgs} args - Arguments to update many Values.
     * @example
     * // Update many Values
     * const value = await prisma.value.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Values and only return the `value_id`
     * const valueWithValue_idOnly = await prisma.value.updateManyAndReturn({
     *   select: { value_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ValueUpdateManyAndReturnArgs>(args: SelectSubset<T, ValueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Value.
     * @param {ValueUpsertArgs} args - Arguments to update or create a Value.
     * @example
     * // Update or create a Value
     * const value = await prisma.value.upsert({
     *   create: {
     *     // ... data to create a Value
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Value we want to update
     *   }
     * })
     */
    upsert<T extends ValueUpsertArgs>(args: SelectSubset<T, ValueUpsertArgs<ExtArgs>>): Prisma__ValueClient<$Result.GetResult<Prisma.$ValuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Values.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueCountArgs} args - Arguments to filter Values to count.
     * @example
     * // Count the number of Values
     * const count = await prisma.value.count({
     *   where: {
     *     // ... the filter for the Values we want to count
     *   }
     * })
    **/
    count<T extends ValueCountArgs>(
      args?: Subset<T, ValueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ValueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ValueAggregateArgs>(args: Subset<T, ValueAggregateArgs>): Prisma.PrismaPromise<GetValueAggregateType<T>>

    /**
     * Group by Value.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ValueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ValueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ValueGroupByArgs['orderBy'] }
        : { orderBy?: ValueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ValueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetValueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Value model
   */
  readonly fields: ValueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Value.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ValueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Value model
   */
  interface ValueFieldRefs {
    readonly value_id: FieldRef<"Value", 'Int'>
    readonly name: FieldRef<"Value", 'String'>
    readonly image_url: FieldRef<"Value", 'String'>
    readonly created_at: FieldRef<"Value", 'DateTime'>
    readonly updated_at: FieldRef<"Value", 'DateTime'>
    readonly user_id: FieldRef<"Value", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Value findUnique
   */
  export type ValueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findUniqueOrThrow
   */
  export type ValueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value findFirst
   */
  export type ValueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findFirstOrThrow
   */
  export type ValueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Value to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Values.
     */
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value findMany
   */
  export type ValueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter, which Values to fetch.
     */
    where?: ValueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Values to fetch.
     */
    orderBy?: ValueOrderByWithRelationInput | ValueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Values.
     */
    cursor?: ValueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Values from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Values.
     */
    skip?: number
    distinct?: ValueScalarFieldEnum | ValueScalarFieldEnum[]
  }

  /**
   * Value create
   */
  export type ValueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The data needed to create a Value.
     */
    data: XOR<ValueCreateInput, ValueUncheckedCreateInput>
  }

  /**
   * Value createMany
   */
  export type ValueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Values.
     */
    data: ValueCreateManyInput | ValueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Value createManyAndReturn
   */
  export type ValueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * The data used to create many Values.
     */
    data: ValueCreateManyInput | ValueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Value update
   */
  export type ValueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The data needed to update a Value.
     */
    data: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
    /**
     * Choose, which Value to update.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value updateMany
   */
  export type ValueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Values.
     */
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyInput>
    /**
     * Filter which Values to update
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to update.
     */
    limit?: number
  }

  /**
   * Value updateManyAndReturn
   */
  export type ValueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * The data used to update Values.
     */
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyInput>
    /**
     * Filter which Values to update
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Value upsert
   */
  export type ValueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * The filter to search for the Value to update in case it exists.
     */
    where: ValueWhereUniqueInput
    /**
     * In case the Value found by the `where` argument doesn't exist, create a new Value with this data.
     */
    create: XOR<ValueCreateInput, ValueUncheckedCreateInput>
    /**
     * In case the Value was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ValueUpdateInput, ValueUncheckedUpdateInput>
  }

  /**
   * Value delete
   */
  export type ValueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
    /**
     * Filter which Value to delete.
     */
    where: ValueWhereUniqueInput
  }

  /**
   * Value deleteMany
   */
  export type ValueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Values to delete
     */
    where?: ValueWhereInput
    /**
     * Limit how many Values to delete.
     */
    limit?: number
  }

  /**
   * Value without action
   */
  export type ValueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Value
     */
    select?: ValueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Value
     */
    omit?: ValueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ValueInclude<ExtArgs> | null
  }


  /**
   * Model Position
   */

  export type AggregatePosition = {
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  export type PositionAvgAggregateOutputType = {
    position_id: number | null
  }

  export type PositionSumAggregateOutputType = {
    position_id: number | null
  }

  export type PositionMinAggregateOutputType = {
    position_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PositionMaxAggregateOutputType = {
    position_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PositionCountAggregateOutputType = {
    position_id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PositionAvgAggregateInputType = {
    position_id?: true
  }

  export type PositionSumAggregateInputType = {
    position_id?: true
  }

  export type PositionMinAggregateInputType = {
    position_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type PositionMaxAggregateInputType = {
    position_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type PositionCountAggregateInputType = {
    position_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PositionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Position to aggregate.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Positions
    **/
    _count?: true | PositionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PositionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PositionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PositionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PositionMaxAggregateInputType
  }

  export type GetPositionAggregateType<T extends PositionAggregateArgs> = {
        [P in keyof T & keyof AggregatePosition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosition[P]>
      : GetScalarType<T[P], AggregatePosition[P]>
  }




  export type PositionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PositionWhereInput
    orderBy?: PositionOrderByWithAggregationInput | PositionOrderByWithAggregationInput[]
    by: PositionScalarFieldEnum[] | PositionScalarFieldEnum
    having?: PositionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PositionCountAggregateInputType | true
    _avg?: PositionAvgAggregateInputType
    _sum?: PositionSumAggregateInputType
    _min?: PositionMinAggregateInputType
    _max?: PositionMaxAggregateInputType
  }

  export type PositionGroupByOutputType = {
    position_id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: PositionCountAggregateOutputType | null
    _avg: PositionAvgAggregateOutputType | null
    _sum: PositionSumAggregateOutputType | null
    _min: PositionMinAggregateOutputType | null
    _max: PositionMaxAggregateOutputType | null
  }

  type GetPositionGroupByPayload<T extends PositionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PositionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PositionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PositionGroupByOutputType[P]>
            : GetScalarType<T[P], PositionGroupByOutputType[P]>
        }
      >
    >


  export type PositionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    position_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    jobs?: boolean | Position$jobsArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["position"]>

  export type PositionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    position_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    position_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["position"]>

  export type PositionSelectScalar = {
    position_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PositionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"position_id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["position"]>
  export type PositionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    jobs?: boolean | Position$jobsArgs<ExtArgs>
    _count?: boolean | PositionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PositionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PositionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PositionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Position"
    objects: {
      jobs: Prisma.$JobPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      position_id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["position"]>
    composites: {}
  }

  type PositionGetPayload<S extends boolean | null | undefined | PositionDefaultArgs> = $Result.GetResult<Prisma.$PositionPayload, S>

  type PositionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PositionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PositionCountAggregateInputType | true
    }

  export interface PositionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Position'], meta: { name: 'Position' } }
    /**
     * Find zero or one Position that matches the filter.
     * @param {PositionFindUniqueArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PositionFindUniqueArgs>(args: SelectSubset<T, PositionFindUniqueArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Position that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PositionFindUniqueOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PositionFindUniqueOrThrowArgs>(args: SelectSubset<T, PositionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PositionFindFirstArgs>(args?: SelectSubset<T, PositionFindFirstArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Position that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindFirstOrThrowArgs} args - Arguments to find a Position
     * @example
     * // Get one Position
     * const position = await prisma.position.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PositionFindFirstOrThrowArgs>(args?: SelectSubset<T, PositionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Positions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Positions
     * const positions = await prisma.position.findMany()
     * 
     * // Get first 10 Positions
     * const positions = await prisma.position.findMany({ take: 10 })
     * 
     * // Only select the `position_id`
     * const positionWithPosition_idOnly = await prisma.position.findMany({ select: { position_id: true } })
     * 
     */
    findMany<T extends PositionFindManyArgs>(args?: SelectSubset<T, PositionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Position.
     * @param {PositionCreateArgs} args - Arguments to create a Position.
     * @example
     * // Create one Position
     * const Position = await prisma.position.create({
     *   data: {
     *     // ... data to create a Position
     *   }
     * })
     * 
     */
    create<T extends PositionCreateArgs>(args: SelectSubset<T, PositionCreateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Positions.
     * @param {PositionCreateManyArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PositionCreateManyArgs>(args?: SelectSubset<T, PositionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Positions and returns the data saved in the database.
     * @param {PositionCreateManyAndReturnArgs} args - Arguments to create many Positions.
     * @example
     * // Create many Positions
     * const position = await prisma.position.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Positions and only return the `position_id`
     * const positionWithPosition_idOnly = await prisma.position.createManyAndReturn({
     *   select: { position_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PositionCreateManyAndReturnArgs>(args?: SelectSubset<T, PositionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Position.
     * @param {PositionDeleteArgs} args - Arguments to delete one Position.
     * @example
     * // Delete one Position
     * const Position = await prisma.position.delete({
     *   where: {
     *     // ... filter to delete one Position
     *   }
     * })
     * 
     */
    delete<T extends PositionDeleteArgs>(args: SelectSubset<T, PositionDeleteArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Position.
     * @param {PositionUpdateArgs} args - Arguments to update one Position.
     * @example
     * // Update one Position
     * const position = await prisma.position.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PositionUpdateArgs>(args: SelectSubset<T, PositionUpdateArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Positions.
     * @param {PositionDeleteManyArgs} args - Arguments to filter Positions to delete.
     * @example
     * // Delete a few Positions
     * const { count } = await prisma.position.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PositionDeleteManyArgs>(args?: SelectSubset<T, PositionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PositionUpdateManyArgs>(args: SelectSubset<T, PositionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Positions and returns the data updated in the database.
     * @param {PositionUpdateManyAndReturnArgs} args - Arguments to update many Positions.
     * @example
     * // Update many Positions
     * const position = await prisma.position.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Positions and only return the `position_id`
     * const positionWithPosition_idOnly = await prisma.position.updateManyAndReturn({
     *   select: { position_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PositionUpdateManyAndReturnArgs>(args: SelectSubset<T, PositionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Position.
     * @param {PositionUpsertArgs} args - Arguments to update or create a Position.
     * @example
     * // Update or create a Position
     * const position = await prisma.position.upsert({
     *   create: {
     *     // ... data to create a Position
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Position we want to update
     *   }
     * })
     */
    upsert<T extends PositionUpsertArgs>(args: SelectSubset<T, PositionUpsertArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Positions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionCountArgs} args - Arguments to filter Positions to count.
     * @example
     * // Count the number of Positions
     * const count = await prisma.position.count({
     *   where: {
     *     // ... the filter for the Positions we want to count
     *   }
     * })
    **/
    count<T extends PositionCountArgs>(
      args?: Subset<T, PositionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PositionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PositionAggregateArgs>(args: Subset<T, PositionAggregateArgs>): Prisma.PrismaPromise<GetPositionAggregateType<T>>

    /**
     * Group by Position.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PositionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PositionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PositionGroupByArgs['orderBy'] }
        : { orderBy?: PositionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PositionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPositionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Position model
   */
  readonly fields: PositionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Position.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PositionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    jobs<T extends Position$jobsArgs<ExtArgs> = {}>(args?: Subset<T, Position$jobsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Position model
   */
  interface PositionFieldRefs {
    readonly position_id: FieldRef<"Position", 'Int'>
    readonly name: FieldRef<"Position", 'String'>
    readonly created_at: FieldRef<"Position", 'DateTime'>
    readonly updated_at: FieldRef<"Position", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Position findUnique
   */
  export type PositionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findUniqueOrThrow
   */
  export type PositionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position findFirst
   */
  export type PositionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findFirstOrThrow
   */
  export type PositionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Position to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Positions.
     */
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position findMany
   */
  export type PositionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter, which Positions to fetch.
     */
    where?: PositionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Positions to fetch.
     */
    orderBy?: PositionOrderByWithRelationInput | PositionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Positions.
     */
    cursor?: PositionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Positions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Positions.
     */
    skip?: number
    distinct?: PositionScalarFieldEnum | PositionScalarFieldEnum[]
  }

  /**
   * Position create
   */
  export type PositionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to create a Position.
     */
    data: XOR<PositionCreateInput, PositionUncheckedCreateInput>
  }

  /**
   * Position createMany
   */
  export type PositionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position createManyAndReturn
   */
  export type PositionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to create many Positions.
     */
    data: PositionCreateManyInput | PositionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Position update
   */
  export type PositionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The data needed to update a Position.
     */
    data: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
    /**
     * Choose, which Position to update.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position updateMany
   */
  export type PositionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position updateManyAndReturn
   */
  export type PositionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * The data used to update Positions.
     */
    data: XOR<PositionUpdateManyMutationInput, PositionUncheckedUpdateManyInput>
    /**
     * Filter which Positions to update
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to update.
     */
    limit?: number
  }

  /**
   * Position upsert
   */
  export type PositionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * The filter to search for the Position to update in case it exists.
     */
    where: PositionWhereUniqueInput
    /**
     * In case the Position found by the `where` argument doesn't exist, create a new Position with this data.
     */
    create: XOR<PositionCreateInput, PositionUncheckedCreateInput>
    /**
     * In case the Position was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PositionUpdateInput, PositionUncheckedUpdateInput>
  }

  /**
   * Position delete
   */
  export type PositionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
    /**
     * Filter which Position to delete.
     */
    where: PositionWhereUniqueInput
  }

  /**
   * Position deleteMany
   */
  export type PositionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Positions to delete
     */
    where?: PositionWhereInput
    /**
     * Limit how many Positions to delete.
     */
    limit?: number
  }

  /**
   * Position.jobs
   */
  export type Position$jobsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    where?: JobWhereInput
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    cursor?: JobWhereUniqueInput
    take?: number
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Position without action
   */
  export type PositionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Position
     */
    select?: PositionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Position
     */
    omit?: PositionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PositionInclude<ExtArgs> | null
  }


  /**
   * Model Job
   */

  export type AggregateJob = {
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  export type JobAvgAggregateOutputType = {
    job_id: number | null
    position_id: number | null
  }

  export type JobSumAggregateOutputType = {
    job_id: number | null
    position_id: number | null
  }

  export type JobMinAggregateOutputType = {
    job_id: number | null
    function: string | null
    created_at: Date | null
    updated_at: Date | null
    position_id: number | null
    user_id: string | null
  }

  export type JobMaxAggregateOutputType = {
    job_id: number | null
    function: string | null
    created_at: Date | null
    updated_at: Date | null
    position_id: number | null
    user_id: string | null
  }

  export type JobCountAggregateOutputType = {
    job_id: number
    function: number
    created_at: number
    updated_at: number
    position_id: number
    user_id: number
    _all: number
  }


  export type JobAvgAggregateInputType = {
    job_id?: true
    position_id?: true
  }

  export type JobSumAggregateInputType = {
    job_id?: true
    position_id?: true
  }

  export type JobMinAggregateInputType = {
    job_id?: true
    function?: true
    created_at?: true
    updated_at?: true
    position_id?: true
    user_id?: true
  }

  export type JobMaxAggregateInputType = {
    job_id?: true
    function?: true
    created_at?: true
    updated_at?: true
    position_id?: true
    user_id?: true
  }

  export type JobCountAggregateInputType = {
    job_id?: true
    function?: true
    created_at?: true
    updated_at?: true
    position_id?: true
    user_id?: true
    _all?: true
  }

  export type JobAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Job to aggregate.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Jobs
    **/
    _count?: true | JobCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JobAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JobSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JobMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JobMaxAggregateInputType
  }

  export type GetJobAggregateType<T extends JobAggregateArgs> = {
        [P in keyof T & keyof AggregateJob]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJob[P]>
      : GetScalarType<T[P], AggregateJob[P]>
  }




  export type JobGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JobWhereInput
    orderBy?: JobOrderByWithAggregationInput | JobOrderByWithAggregationInput[]
    by: JobScalarFieldEnum[] | JobScalarFieldEnum
    having?: JobScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JobCountAggregateInputType | true
    _avg?: JobAvgAggregateInputType
    _sum?: JobSumAggregateInputType
    _min?: JobMinAggregateInputType
    _max?: JobMaxAggregateInputType
  }

  export type JobGroupByOutputType = {
    job_id: number
    function: string
    created_at: Date
    updated_at: Date
    position_id: number
    user_id: string
    _count: JobCountAggregateOutputType | null
    _avg: JobAvgAggregateOutputType | null
    _sum: JobSumAggregateOutputType | null
    _min: JobMinAggregateOutputType | null
    _max: JobMaxAggregateOutputType | null
  }

  type GetJobGroupByPayload<T extends JobGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JobGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JobGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JobGroupByOutputType[P]>
            : GetScalarType<T[P], JobGroupByOutputType[P]>
        }
      >
    >


  export type JobSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    function?: boolean
    created_at?: boolean
    updated_at?: boolean
    position_id?: boolean
    user_id?: boolean
    position?: boolean | PositionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    function?: boolean
    created_at?: boolean
    updated_at?: boolean
    position_id?: boolean
    user_id?: boolean
    position?: boolean | PositionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    job_id?: boolean
    function?: boolean
    created_at?: boolean
    updated_at?: boolean
    position_id?: boolean
    user_id?: boolean
    position?: boolean | PositionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["job"]>

  export type JobSelectScalar = {
    job_id?: boolean
    function?: boolean
    created_at?: boolean
    updated_at?: boolean
    position_id?: boolean
    user_id?: boolean
  }

  export type JobOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"job_id" | "function" | "created_at" | "updated_at" | "position_id" | "user_id", ExtArgs["result"]["job"]>
  export type JobInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | PositionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | PositionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type JobIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    position?: boolean | PositionDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $JobPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Job"
    objects: {
      position: Prisma.$PositionPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      job_id: number
      function: string
      created_at: Date
      updated_at: Date
      position_id: number
      user_id: string
    }, ExtArgs["result"]["job"]>
    composites: {}
  }

  type JobGetPayload<S extends boolean | null | undefined | JobDefaultArgs> = $Result.GetResult<Prisma.$JobPayload, S>

  type JobCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<JobFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: JobCountAggregateInputType | true
    }

  export interface JobDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Job'], meta: { name: 'Job' } }
    /**
     * Find zero or one Job that matches the filter.
     * @param {JobFindUniqueArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends JobFindUniqueArgs>(args: SelectSubset<T, JobFindUniqueArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Job that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {JobFindUniqueOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends JobFindUniqueOrThrowArgs>(args: SelectSubset<T, JobFindUniqueOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends JobFindFirstArgs>(args?: SelectSubset<T, JobFindFirstArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Job that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindFirstOrThrowArgs} args - Arguments to find a Job
     * @example
     * // Get one Job
     * const job = await prisma.job.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends JobFindFirstOrThrowArgs>(args?: SelectSubset<T, JobFindFirstOrThrowArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Jobs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Jobs
     * const jobs = await prisma.job.findMany()
     * 
     * // Get first 10 Jobs
     * const jobs = await prisma.job.findMany({ take: 10 })
     * 
     * // Only select the `job_id`
     * const jobWithJob_idOnly = await prisma.job.findMany({ select: { job_id: true } })
     * 
     */
    findMany<T extends JobFindManyArgs>(args?: SelectSubset<T, JobFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Job.
     * @param {JobCreateArgs} args - Arguments to create a Job.
     * @example
     * // Create one Job
     * const Job = await prisma.job.create({
     *   data: {
     *     // ... data to create a Job
     *   }
     * })
     * 
     */
    create<T extends JobCreateArgs>(args: SelectSubset<T, JobCreateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Jobs.
     * @param {JobCreateManyArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends JobCreateManyArgs>(args?: SelectSubset<T, JobCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Jobs and returns the data saved in the database.
     * @param {JobCreateManyAndReturnArgs} args - Arguments to create many Jobs.
     * @example
     * // Create many Jobs
     * const job = await prisma.job.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Jobs and only return the `job_id`
     * const jobWithJob_idOnly = await prisma.job.createManyAndReturn({
     *   select: { job_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends JobCreateManyAndReturnArgs>(args?: SelectSubset<T, JobCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Job.
     * @param {JobDeleteArgs} args - Arguments to delete one Job.
     * @example
     * // Delete one Job
     * const Job = await prisma.job.delete({
     *   where: {
     *     // ... filter to delete one Job
     *   }
     * })
     * 
     */
    delete<T extends JobDeleteArgs>(args: SelectSubset<T, JobDeleteArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Job.
     * @param {JobUpdateArgs} args - Arguments to update one Job.
     * @example
     * // Update one Job
     * const job = await prisma.job.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends JobUpdateArgs>(args: SelectSubset<T, JobUpdateArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Jobs.
     * @param {JobDeleteManyArgs} args - Arguments to filter Jobs to delete.
     * @example
     * // Delete a few Jobs
     * const { count } = await prisma.job.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends JobDeleteManyArgs>(args?: SelectSubset<T, JobDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends JobUpdateManyArgs>(args: SelectSubset<T, JobUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Jobs and returns the data updated in the database.
     * @param {JobUpdateManyAndReturnArgs} args - Arguments to update many Jobs.
     * @example
     * // Update many Jobs
     * const job = await prisma.job.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Jobs and only return the `job_id`
     * const jobWithJob_idOnly = await prisma.job.updateManyAndReturn({
     *   select: { job_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends JobUpdateManyAndReturnArgs>(args: SelectSubset<T, JobUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Job.
     * @param {JobUpsertArgs} args - Arguments to update or create a Job.
     * @example
     * // Update or create a Job
     * const job = await prisma.job.upsert({
     *   create: {
     *     // ... data to create a Job
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Job we want to update
     *   }
     * })
     */
    upsert<T extends JobUpsertArgs>(args: SelectSubset<T, JobUpsertArgs<ExtArgs>>): Prisma__JobClient<$Result.GetResult<Prisma.$JobPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Jobs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobCountArgs} args - Arguments to filter Jobs to count.
     * @example
     * // Count the number of Jobs
     * const count = await prisma.job.count({
     *   where: {
     *     // ... the filter for the Jobs we want to count
     *   }
     * })
    **/
    count<T extends JobCountArgs>(
      args?: Subset<T, JobCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JobCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JobAggregateArgs>(args: Subset<T, JobAggregateArgs>): Prisma.PrismaPromise<GetJobAggregateType<T>>

    /**
     * Group by Job.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JobGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JobGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JobGroupByArgs['orderBy'] }
        : { orderBy?: JobGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JobGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJobGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Job model
   */
  readonly fields: JobFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Job.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JobClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    position<T extends PositionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PositionDefaultArgs<ExtArgs>>): Prisma__PositionClient<$Result.GetResult<Prisma.$PositionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Job model
   */
  interface JobFieldRefs {
    readonly job_id: FieldRef<"Job", 'Int'>
    readonly function: FieldRef<"Job", 'String'>
    readonly created_at: FieldRef<"Job", 'DateTime'>
    readonly updated_at: FieldRef<"Job", 'DateTime'>
    readonly position_id: FieldRef<"Job", 'Int'>
    readonly user_id: FieldRef<"Job", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Job findUnique
   */
  export type JobFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findUniqueOrThrow
   */
  export type JobFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job findFirst
   */
  export type JobFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findFirstOrThrow
   */
  export type JobFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Job to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Jobs.
     */
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job findMany
   */
  export type JobFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter, which Jobs to fetch.
     */
    where?: JobWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Jobs to fetch.
     */
    orderBy?: JobOrderByWithRelationInput | JobOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Jobs.
     */
    cursor?: JobWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Jobs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Jobs.
     */
    skip?: number
    distinct?: JobScalarFieldEnum | JobScalarFieldEnum[]
  }

  /**
   * Job create
   */
  export type JobCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to create a Job.
     */
    data: XOR<JobCreateInput, JobUncheckedCreateInput>
  }

  /**
   * Job createMany
   */
  export type JobCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Job createManyAndReturn
   */
  export type JobCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to create many Jobs.
     */
    data: JobCreateManyInput | JobCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job update
   */
  export type JobUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The data needed to update a Job.
     */
    data: XOR<JobUpdateInput, JobUncheckedUpdateInput>
    /**
     * Choose, which Job to update.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job updateMany
   */
  export type JobUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
  }

  /**
   * Job updateManyAndReturn
   */
  export type JobUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * The data used to update Jobs.
     */
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyInput>
    /**
     * Filter which Jobs to update
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Job upsert
   */
  export type JobUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * The filter to search for the Job to update in case it exists.
     */
    where: JobWhereUniqueInput
    /**
     * In case the Job found by the `where` argument doesn't exist, create a new Job with this data.
     */
    create: XOR<JobCreateInput, JobUncheckedCreateInput>
    /**
     * In case the Job was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JobUpdateInput, JobUncheckedUpdateInput>
  }

  /**
   * Job delete
   */
  export type JobDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
    /**
     * Filter which Job to delete.
     */
    where: JobWhereUniqueInput
  }

  /**
   * Job deleteMany
   */
  export type JobDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Jobs to delete
     */
    where?: JobWhereInput
    /**
     * Limit how many Jobs to delete.
     */
    limit?: number
  }

  /**
   * Job without action
   */
  export type JobDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Job
     */
    select?: JobSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Job
     */
    omit?: JobOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JobInclude<ExtArgs> | null
  }


  /**
   * Model Step
   */

  export type AggregateStep = {
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  export type StepAvgAggregateOutputType = {
    step_id: number | null
    path_id: number | null
  }

  export type StepSumAggregateOutputType = {
    step_id: number | null
    path_id: number | null
  }

  export type StepMinAggregateOutputType = {
    step_id: number | null
    name: string | null
    image_url: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    path_id: number | null
  }

  export type StepMaxAggregateOutputType = {
    step_id: number | null
    name: string | null
    image_url: string | null
    description: string | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
    path_id: number | null
  }

  export type StepCountAggregateOutputType = {
    step_id: number
    name: number
    image_url: number
    description: number
    created_at: number
    updated_at: number
    user_id: number
    path_id: number
    _all: number
  }


  export type StepAvgAggregateInputType = {
    step_id?: true
    path_id?: true
  }

  export type StepSumAggregateInputType = {
    step_id?: true
    path_id?: true
  }

  export type StepMinAggregateInputType = {
    step_id?: true
    name?: true
    image_url?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    path_id?: true
  }

  export type StepMaxAggregateInputType = {
    step_id?: true
    name?: true
    image_url?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    path_id?: true
  }

  export type StepCountAggregateInputType = {
    step_id?: true
    name?: true
    image_url?: true
    description?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    path_id?: true
    _all?: true
  }

  export type StepAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Step to aggregate.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Steps
    **/
    _count?: true | StepCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StepAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StepSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StepMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StepMaxAggregateInputType
  }

  export type GetStepAggregateType<T extends StepAggregateArgs> = {
        [P in keyof T & keyof AggregateStep]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStep[P]>
      : GetScalarType<T[P], AggregateStep[P]>
  }




  export type StepGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StepWhereInput
    orderBy?: StepOrderByWithAggregationInput | StepOrderByWithAggregationInput[]
    by: StepScalarFieldEnum[] | StepScalarFieldEnum
    having?: StepScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StepCountAggregateInputType | true
    _avg?: StepAvgAggregateInputType
    _sum?: StepSumAggregateInputType
    _min?: StepMinAggregateInputType
    _max?: StepMaxAggregateInputType
  }

  export type StepGroupByOutputType = {
    step_id: number
    name: string
    image_url: string | null
    description: string
    created_at: Date
    updated_at: Date
    user_id: string
    path_id: number
    _count: StepCountAggregateOutputType | null
    _avg: StepAvgAggregateOutputType | null
    _sum: StepSumAggregateOutputType | null
    _min: StepMinAggregateOutputType | null
    _max: StepMaxAggregateOutputType | null
  }

  type GetStepGroupByPayload<T extends StepGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StepGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StepGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StepGroupByOutputType[P]>
            : GetScalarType<T[P], StepGroupByOutputType[P]>
        }
      >
    >


  export type StepSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    step_id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    path_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | PathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    step_id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    path_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | PathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    step_id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    path_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | PathDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["step"]>

  export type StepSelectScalar = {
    step_id?: boolean
    name?: boolean
    image_url?: boolean
    description?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    path_id?: boolean
  }

  export type StepOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"step_id" | "name" | "image_url" | "description" | "created_at" | "updated_at" | "user_id" | "path_id", ExtArgs["result"]["step"]>
  export type StepInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | PathDefaultArgs<ExtArgs>
  }
  export type StepIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | PathDefaultArgs<ExtArgs>
  }
  export type StepIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    path?: boolean | PathDefaultArgs<ExtArgs>
  }

  export type $StepPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Step"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      path: Prisma.$PathPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      step_id: number
      name: string
      image_url: string | null
      description: string
      created_at: Date
      updated_at: Date
      user_id: string
      path_id: number
    }, ExtArgs["result"]["step"]>
    composites: {}
  }

  type StepGetPayload<S extends boolean | null | undefined | StepDefaultArgs> = $Result.GetResult<Prisma.$StepPayload, S>

  type StepCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StepFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StepCountAggregateInputType | true
    }

  export interface StepDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Step'], meta: { name: 'Step' } }
    /**
     * Find zero or one Step that matches the filter.
     * @param {StepFindUniqueArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StepFindUniqueArgs>(args: SelectSubset<T, StepFindUniqueArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Step that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StepFindUniqueOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StepFindUniqueOrThrowArgs>(args: SelectSubset<T, StepFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StepFindFirstArgs>(args?: SelectSubset<T, StepFindFirstArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Step that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindFirstOrThrowArgs} args - Arguments to find a Step
     * @example
     * // Get one Step
     * const step = await prisma.step.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StepFindFirstOrThrowArgs>(args?: SelectSubset<T, StepFindFirstOrThrowArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Steps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Steps
     * const steps = await prisma.step.findMany()
     * 
     * // Get first 10 Steps
     * const steps = await prisma.step.findMany({ take: 10 })
     * 
     * // Only select the `step_id`
     * const stepWithStep_idOnly = await prisma.step.findMany({ select: { step_id: true } })
     * 
     */
    findMany<T extends StepFindManyArgs>(args?: SelectSubset<T, StepFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Step.
     * @param {StepCreateArgs} args - Arguments to create a Step.
     * @example
     * // Create one Step
     * const Step = await prisma.step.create({
     *   data: {
     *     // ... data to create a Step
     *   }
     * })
     * 
     */
    create<T extends StepCreateArgs>(args: SelectSubset<T, StepCreateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Steps.
     * @param {StepCreateManyArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StepCreateManyArgs>(args?: SelectSubset<T, StepCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Steps and returns the data saved in the database.
     * @param {StepCreateManyAndReturnArgs} args - Arguments to create many Steps.
     * @example
     * // Create many Steps
     * const step = await prisma.step.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Steps and only return the `step_id`
     * const stepWithStep_idOnly = await prisma.step.createManyAndReturn({
     *   select: { step_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StepCreateManyAndReturnArgs>(args?: SelectSubset<T, StepCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Step.
     * @param {StepDeleteArgs} args - Arguments to delete one Step.
     * @example
     * // Delete one Step
     * const Step = await prisma.step.delete({
     *   where: {
     *     // ... filter to delete one Step
     *   }
     * })
     * 
     */
    delete<T extends StepDeleteArgs>(args: SelectSubset<T, StepDeleteArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Step.
     * @param {StepUpdateArgs} args - Arguments to update one Step.
     * @example
     * // Update one Step
     * const step = await prisma.step.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StepUpdateArgs>(args: SelectSubset<T, StepUpdateArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Steps.
     * @param {StepDeleteManyArgs} args - Arguments to filter Steps to delete.
     * @example
     * // Delete a few Steps
     * const { count } = await prisma.step.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StepDeleteManyArgs>(args?: SelectSubset<T, StepDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StepUpdateManyArgs>(args: SelectSubset<T, StepUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Steps and returns the data updated in the database.
     * @param {StepUpdateManyAndReturnArgs} args - Arguments to update many Steps.
     * @example
     * // Update many Steps
     * const step = await prisma.step.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Steps and only return the `step_id`
     * const stepWithStep_idOnly = await prisma.step.updateManyAndReturn({
     *   select: { step_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StepUpdateManyAndReturnArgs>(args: SelectSubset<T, StepUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Step.
     * @param {StepUpsertArgs} args - Arguments to update or create a Step.
     * @example
     * // Update or create a Step
     * const step = await prisma.step.upsert({
     *   create: {
     *     // ... data to create a Step
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Step we want to update
     *   }
     * })
     */
    upsert<T extends StepUpsertArgs>(args: SelectSubset<T, StepUpsertArgs<ExtArgs>>): Prisma__StepClient<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Steps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepCountArgs} args - Arguments to filter Steps to count.
     * @example
     * // Count the number of Steps
     * const count = await prisma.step.count({
     *   where: {
     *     // ... the filter for the Steps we want to count
     *   }
     * })
    **/
    count<T extends StepCountArgs>(
      args?: Subset<T, StepCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StepCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StepAggregateArgs>(args: Subset<T, StepAggregateArgs>): Prisma.PrismaPromise<GetStepAggregateType<T>>

    /**
     * Group by Step.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StepGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StepGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StepGroupByArgs['orderBy'] }
        : { orderBy?: StepGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StepGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStepGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Step model
   */
  readonly fields: StepFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Step.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StepClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    path<T extends PathDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PathDefaultArgs<ExtArgs>>): Prisma__PathClient<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Step model
   */
  interface StepFieldRefs {
    readonly step_id: FieldRef<"Step", 'Int'>
    readonly name: FieldRef<"Step", 'String'>
    readonly image_url: FieldRef<"Step", 'String'>
    readonly description: FieldRef<"Step", 'String'>
    readonly created_at: FieldRef<"Step", 'DateTime'>
    readonly updated_at: FieldRef<"Step", 'DateTime'>
    readonly user_id: FieldRef<"Step", 'String'>
    readonly path_id: FieldRef<"Step", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Step findUnique
   */
  export type StepFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findUniqueOrThrow
   */
  export type StepFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step findFirst
   */
  export type StepFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findFirstOrThrow
   */
  export type StepFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Step to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Steps.
     */
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step findMany
   */
  export type StepFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter, which Steps to fetch.
     */
    where?: StepWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Steps to fetch.
     */
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Steps.
     */
    cursor?: StepWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Steps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Steps.
     */
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Step create
   */
  export type StepCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to create a Step.
     */
    data: XOR<StepCreateInput, StepUncheckedCreateInput>
  }

  /**
   * Step createMany
   */
  export type StepCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Step createManyAndReturn
   */
  export type StepCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to create many Steps.
     */
    data: StepCreateManyInput | StepCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step update
   */
  export type StepUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The data needed to update a Step.
     */
    data: XOR<StepUpdateInput, StepUncheckedUpdateInput>
    /**
     * Choose, which Step to update.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step updateMany
   */
  export type StepUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
  }

  /**
   * Step updateManyAndReturn
   */
  export type StepUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * The data used to update Steps.
     */
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyInput>
    /**
     * Filter which Steps to update
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Step upsert
   */
  export type StepUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * The filter to search for the Step to update in case it exists.
     */
    where: StepWhereUniqueInput
    /**
     * In case the Step found by the `where` argument doesn't exist, create a new Step with this data.
     */
    create: XOR<StepCreateInput, StepUncheckedCreateInput>
    /**
     * In case the Step was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StepUpdateInput, StepUncheckedUpdateInput>
  }

  /**
   * Step delete
   */
  export type StepDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    /**
     * Filter which Step to delete.
     */
    where: StepWhereUniqueInput
  }

  /**
   * Step deleteMany
   */
  export type StepDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Steps to delete
     */
    where?: StepWhereInput
    /**
     * Limit how many Steps to delete.
     */
    limit?: number
  }

  /**
   * Step without action
   */
  export type StepDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
  }


  /**
   * Model Path
   */

  export type AggregatePath = {
    _count: PathCountAggregateOutputType | null
    _avg: PathAvgAggregateOutputType | null
    _sum: PathSumAggregateOutputType | null
    _min: PathMinAggregateOutputType | null
    _max: PathMaxAggregateOutputType | null
  }

  export type PathAvgAggregateOutputType = {
    path_id: number | null
  }

  export type PathSumAggregateOutputType = {
    path_id: number | null
  }

  export type PathMinAggregateOutputType = {
    path_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PathMaxAggregateOutputType = {
    path_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PathCountAggregateOutputType = {
    path_id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PathAvgAggregateInputType = {
    path_id?: true
  }

  export type PathSumAggregateInputType = {
    path_id?: true
  }

  export type PathMinAggregateInputType = {
    path_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type PathMaxAggregateInputType = {
    path_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type PathCountAggregateInputType = {
    path_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PathAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Path to aggregate.
     */
    where?: PathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paths to fetch.
     */
    orderBy?: PathOrderByWithRelationInput | PathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paths
    **/
    _count?: true | PathCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PathAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PathSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PathMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PathMaxAggregateInputType
  }

  export type GetPathAggregateType<T extends PathAggregateArgs> = {
        [P in keyof T & keyof AggregatePath]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePath[P]>
      : GetScalarType<T[P], AggregatePath[P]>
  }




  export type PathGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PathWhereInput
    orderBy?: PathOrderByWithAggregationInput | PathOrderByWithAggregationInput[]
    by: PathScalarFieldEnum[] | PathScalarFieldEnum
    having?: PathScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PathCountAggregateInputType | true
    _avg?: PathAvgAggregateInputType
    _sum?: PathSumAggregateInputType
    _min?: PathMinAggregateInputType
    _max?: PathMaxAggregateInputType
  }

  export type PathGroupByOutputType = {
    path_id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: PathCountAggregateOutputType | null
    _avg: PathAvgAggregateOutputType | null
    _sum: PathSumAggregateOutputType | null
    _min: PathMinAggregateOutputType | null
    _max: PathMaxAggregateOutputType | null
  }

  type GetPathGroupByPayload<T extends PathGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PathGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PathGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PathGroupByOutputType[P]>
            : GetScalarType<T[P], PathGroupByOutputType[P]>
        }
      >
    >


  export type PathSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    path_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    steps?: boolean | Path$stepsArgs<ExtArgs>
    _count?: boolean | PathCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["path"]>

  export type PathSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    path_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["path"]>

  export type PathSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    path_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["path"]>

  export type PathSelectScalar = {
    path_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PathOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"path_id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["path"]>
  export type PathInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    steps?: boolean | Path$stepsArgs<ExtArgs>
    _count?: boolean | PathCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PathIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PathIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PathPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Path"
    objects: {
      steps: Prisma.$StepPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      path_id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["path"]>
    composites: {}
  }

  type PathGetPayload<S extends boolean | null | undefined | PathDefaultArgs> = $Result.GetResult<Prisma.$PathPayload, S>

  type PathCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PathFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PathCountAggregateInputType | true
    }

  export interface PathDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Path'], meta: { name: 'Path' } }
    /**
     * Find zero or one Path that matches the filter.
     * @param {PathFindUniqueArgs} args - Arguments to find a Path
     * @example
     * // Get one Path
     * const path = await prisma.path.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PathFindUniqueArgs>(args: SelectSubset<T, PathFindUniqueArgs<ExtArgs>>): Prisma__PathClient<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Path that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PathFindUniqueOrThrowArgs} args - Arguments to find a Path
     * @example
     * // Get one Path
     * const path = await prisma.path.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PathFindUniqueOrThrowArgs>(args: SelectSubset<T, PathFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PathClient<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Path that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathFindFirstArgs} args - Arguments to find a Path
     * @example
     * // Get one Path
     * const path = await prisma.path.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PathFindFirstArgs>(args?: SelectSubset<T, PathFindFirstArgs<ExtArgs>>): Prisma__PathClient<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Path that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathFindFirstOrThrowArgs} args - Arguments to find a Path
     * @example
     * // Get one Path
     * const path = await prisma.path.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PathFindFirstOrThrowArgs>(args?: SelectSubset<T, PathFindFirstOrThrowArgs<ExtArgs>>): Prisma__PathClient<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paths that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paths
     * const paths = await prisma.path.findMany()
     * 
     * // Get first 10 Paths
     * const paths = await prisma.path.findMany({ take: 10 })
     * 
     * // Only select the `path_id`
     * const pathWithPath_idOnly = await prisma.path.findMany({ select: { path_id: true } })
     * 
     */
    findMany<T extends PathFindManyArgs>(args?: SelectSubset<T, PathFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Path.
     * @param {PathCreateArgs} args - Arguments to create a Path.
     * @example
     * // Create one Path
     * const Path = await prisma.path.create({
     *   data: {
     *     // ... data to create a Path
     *   }
     * })
     * 
     */
    create<T extends PathCreateArgs>(args: SelectSubset<T, PathCreateArgs<ExtArgs>>): Prisma__PathClient<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paths.
     * @param {PathCreateManyArgs} args - Arguments to create many Paths.
     * @example
     * // Create many Paths
     * const path = await prisma.path.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PathCreateManyArgs>(args?: SelectSubset<T, PathCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paths and returns the data saved in the database.
     * @param {PathCreateManyAndReturnArgs} args - Arguments to create many Paths.
     * @example
     * // Create many Paths
     * const path = await prisma.path.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paths and only return the `path_id`
     * const pathWithPath_idOnly = await prisma.path.createManyAndReturn({
     *   select: { path_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PathCreateManyAndReturnArgs>(args?: SelectSubset<T, PathCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Path.
     * @param {PathDeleteArgs} args - Arguments to delete one Path.
     * @example
     * // Delete one Path
     * const Path = await prisma.path.delete({
     *   where: {
     *     // ... filter to delete one Path
     *   }
     * })
     * 
     */
    delete<T extends PathDeleteArgs>(args: SelectSubset<T, PathDeleteArgs<ExtArgs>>): Prisma__PathClient<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Path.
     * @param {PathUpdateArgs} args - Arguments to update one Path.
     * @example
     * // Update one Path
     * const path = await prisma.path.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PathUpdateArgs>(args: SelectSubset<T, PathUpdateArgs<ExtArgs>>): Prisma__PathClient<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paths.
     * @param {PathDeleteManyArgs} args - Arguments to filter Paths to delete.
     * @example
     * // Delete a few Paths
     * const { count } = await prisma.path.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PathDeleteManyArgs>(args?: SelectSubset<T, PathDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paths
     * const path = await prisma.path.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PathUpdateManyArgs>(args: SelectSubset<T, PathUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paths and returns the data updated in the database.
     * @param {PathUpdateManyAndReturnArgs} args - Arguments to update many Paths.
     * @example
     * // Update many Paths
     * const path = await prisma.path.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paths and only return the `path_id`
     * const pathWithPath_idOnly = await prisma.path.updateManyAndReturn({
     *   select: { path_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PathUpdateManyAndReturnArgs>(args: SelectSubset<T, PathUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Path.
     * @param {PathUpsertArgs} args - Arguments to update or create a Path.
     * @example
     * // Update or create a Path
     * const path = await prisma.path.upsert({
     *   create: {
     *     // ... data to create a Path
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Path we want to update
     *   }
     * })
     */
    upsert<T extends PathUpsertArgs>(args: SelectSubset<T, PathUpsertArgs<ExtArgs>>): Prisma__PathClient<$Result.GetResult<Prisma.$PathPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paths.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathCountArgs} args - Arguments to filter Paths to count.
     * @example
     * // Count the number of Paths
     * const count = await prisma.path.count({
     *   where: {
     *     // ... the filter for the Paths we want to count
     *   }
     * })
    **/
    count<T extends PathCountArgs>(
      args?: Subset<T, PathCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PathCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Path.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PathAggregateArgs>(args: Subset<T, PathAggregateArgs>): Prisma.PrismaPromise<GetPathAggregateType<T>>

    /**
     * Group by Path.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PathGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PathGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PathGroupByArgs['orderBy'] }
        : { orderBy?: PathGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PathGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPathGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Path model
   */
  readonly fields: PathFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Path.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PathClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    steps<T extends Path$stepsArgs<ExtArgs> = {}>(args?: Subset<T, Path$stepsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StepPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Path model
   */
  interface PathFieldRefs {
    readonly path_id: FieldRef<"Path", 'Int'>
    readonly name: FieldRef<"Path", 'String'>
    readonly created_at: FieldRef<"Path", 'DateTime'>
    readonly updated_at: FieldRef<"Path", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Path findUnique
   */
  export type PathFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
    /**
     * Filter, which Path to fetch.
     */
    where: PathWhereUniqueInput
  }

  /**
   * Path findUniqueOrThrow
   */
  export type PathFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
    /**
     * Filter, which Path to fetch.
     */
    where: PathWhereUniqueInput
  }

  /**
   * Path findFirst
   */
  export type PathFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
    /**
     * Filter, which Path to fetch.
     */
    where?: PathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paths to fetch.
     */
    orderBy?: PathOrderByWithRelationInput | PathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paths.
     */
    cursor?: PathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paths.
     */
    distinct?: PathScalarFieldEnum | PathScalarFieldEnum[]
  }

  /**
   * Path findFirstOrThrow
   */
  export type PathFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
    /**
     * Filter, which Path to fetch.
     */
    where?: PathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paths to fetch.
     */
    orderBy?: PathOrderByWithRelationInput | PathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paths.
     */
    cursor?: PathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paths.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paths.
     */
    distinct?: PathScalarFieldEnum | PathScalarFieldEnum[]
  }

  /**
   * Path findMany
   */
  export type PathFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
    /**
     * Filter, which Paths to fetch.
     */
    where?: PathWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paths to fetch.
     */
    orderBy?: PathOrderByWithRelationInput | PathOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paths.
     */
    cursor?: PathWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paths from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paths.
     */
    skip?: number
    distinct?: PathScalarFieldEnum | PathScalarFieldEnum[]
  }

  /**
   * Path create
   */
  export type PathCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
    /**
     * The data needed to create a Path.
     */
    data: XOR<PathCreateInput, PathUncheckedCreateInput>
  }

  /**
   * Path createMany
   */
  export type PathCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paths.
     */
    data: PathCreateManyInput | PathCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Path createManyAndReturn
   */
  export type PathCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * The data used to create many Paths.
     */
    data: PathCreateManyInput | PathCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Path update
   */
  export type PathUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
    /**
     * The data needed to update a Path.
     */
    data: XOR<PathUpdateInput, PathUncheckedUpdateInput>
    /**
     * Choose, which Path to update.
     */
    where: PathWhereUniqueInput
  }

  /**
   * Path updateMany
   */
  export type PathUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paths.
     */
    data: XOR<PathUpdateManyMutationInput, PathUncheckedUpdateManyInput>
    /**
     * Filter which Paths to update
     */
    where?: PathWhereInput
    /**
     * Limit how many Paths to update.
     */
    limit?: number
  }

  /**
   * Path updateManyAndReturn
   */
  export type PathUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * The data used to update Paths.
     */
    data: XOR<PathUpdateManyMutationInput, PathUncheckedUpdateManyInput>
    /**
     * Filter which Paths to update
     */
    where?: PathWhereInput
    /**
     * Limit how many Paths to update.
     */
    limit?: number
  }

  /**
   * Path upsert
   */
  export type PathUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
    /**
     * The filter to search for the Path to update in case it exists.
     */
    where: PathWhereUniqueInput
    /**
     * In case the Path found by the `where` argument doesn't exist, create a new Path with this data.
     */
    create: XOR<PathCreateInput, PathUncheckedCreateInput>
    /**
     * In case the Path was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PathUpdateInput, PathUncheckedUpdateInput>
  }

  /**
   * Path delete
   */
  export type PathDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
    /**
     * Filter which Path to delete.
     */
    where: PathWhereUniqueInput
  }

  /**
   * Path deleteMany
   */
  export type PathDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paths to delete
     */
    where?: PathWhereInput
    /**
     * Limit how many Paths to delete.
     */
    limit?: number
  }

  /**
   * Path.steps
   */
  export type Path$stepsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Step
     */
    select?: StepSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Step
     */
    omit?: StepOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StepInclude<ExtArgs> | null
    where?: StepWhereInput
    orderBy?: StepOrderByWithRelationInput | StepOrderByWithRelationInput[]
    cursor?: StepWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StepScalarFieldEnum | StepScalarFieldEnum[]
  }

  /**
   * Path without action
   */
  export type PathDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Path
     */
    select?: PathSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Path
     */
    omit?: PathOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PathInclude<ExtArgs> | null
  }


  /**
   * Model File
   */

  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    file_id: number | null
  }

  export type FileSumAggregateOutputType = {
    file_id: number | null
  }

  export type FileMinAggregateOutputType = {
    file_id: number | null
    name: string | null
    file: Uint8Array | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type FileMaxAggregateOutputType = {
    file_id: number | null
    name: string | null
    file: Uint8Array | null
    created_at: Date | null
    updated_at: Date | null
    user_id: string | null
  }

  export type FileCountAggregateOutputType = {
    file_id: number
    name: number
    file: number
    created_at: number
    updated_at: number
    user_id: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    file_id?: true
  }

  export type FileSumAggregateInputType = {
    file_id?: true
  }

  export type FileMinAggregateInputType = {
    file_id?: true
    name?: true
    file?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type FileMaxAggregateInputType = {
    file_id?: true
    name?: true
    file?: true
    created_at?: true
    updated_at?: true
    user_id?: true
  }

  export type FileCountAggregateInputType = {
    file_id?: true
    name?: true
    file?: true
    created_at?: true
    updated_at?: true
    user_id?: true
    _all?: true
  }

  export type FileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which File to aggregate.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }




  export type FileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FileWhereInput
    orderBy?: FileOrderByWithAggregationInput | FileOrderByWithAggregationInput[]
    by: FileScalarFieldEnum[] | FileScalarFieldEnum
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }

  export type FileGroupByOutputType = {
    file_id: number
    name: string
    file: Uint8Array
    created_at: Date
    updated_at: Date
    user_id: string
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FileGroupByOutputType[P]>
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      >
    >


  export type FileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    name?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    name?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    file_id?: boolean
    name?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["file"]>

  export type FileSelectScalar = {
    file_id?: boolean
    name?: boolean
    file?: boolean
    created_at?: boolean
    updated_at?: boolean
    user_id?: boolean
  }

  export type FileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"file_id" | "name" | "file" | "created_at" | "updated_at" | "user_id", ExtArgs["result"]["file"]>
  export type FileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "File"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      file_id: number
      name: string
      file: Uint8Array
      created_at: Date
      updated_at: Date
      user_id: string
    }, ExtArgs["result"]["file"]>
    composites: {}
  }

  type FileGetPayload<S extends boolean | null | undefined | FileDefaultArgs> = $Result.GetResult<Prisma.$FilePayload, S>

  type FileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FileCountAggregateInputType | true
    }

  export interface FileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['File'], meta: { name: 'File' } }
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FileFindUniqueArgs>(args: SelectSubset<T, FileFindUniqueArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one File that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FileFindUniqueOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FileFindUniqueOrThrowArgs>(args: SelectSubset<T, FileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FileFindFirstArgs>(args?: SelectSubset<T, FileFindFirstArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first File that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstOrThrowArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FileFindFirstOrThrowArgs>(args?: SelectSubset<T, FileFindFirstOrThrowArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `file_id`
     * const fileWithFile_idOnly = await prisma.file.findMany({ select: { file_id: true } })
     * 
     */
    findMany<T extends FileFindManyArgs>(args?: SelectSubset<T, FileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
     */
    create<T extends FileCreateArgs>(args: SelectSubset<T, FileCreateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FileCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FileCreateManyArgs>(args?: SelectSubset<T, FileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FileCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const file = await prisma.file.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `file_id`
     * const fileWithFile_idOnly = await prisma.file.createManyAndReturn({
     *   select: { file_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FileCreateManyAndReturnArgs>(args?: SelectSubset<T, FileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
     */
    delete<T extends FileDeleteArgs>(args: SelectSubset<T, FileDeleteArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FileUpdateArgs>(args: SelectSubset<T, FileUpdateArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FileDeleteManyArgs>(args?: SelectSubset<T, FileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FileUpdateManyArgs>(args: SelectSubset<T, FileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FileUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `file_id`
     * const fileWithFile_idOnly = await prisma.file.updateManyAndReturn({
     *   select: { file_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FileUpdateManyAndReturnArgs>(args: SelectSubset<T, FileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
     */
    upsert<T extends FileUpsertArgs>(args: SelectSubset<T, FileUpsertArgs<ExtArgs>>): Prisma__FileClient<$Result.GetResult<Prisma.$FilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): Prisma.PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the File model
   */
  readonly fields: FileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the File model
   */
  interface FileFieldRefs {
    readonly file_id: FieldRef<"File", 'Int'>
    readonly name: FieldRef<"File", 'String'>
    readonly file: FieldRef<"File", 'Bytes'>
    readonly created_at: FieldRef<"File", 'DateTime'>
    readonly updated_at: FieldRef<"File", 'DateTime'>
    readonly user_id: FieldRef<"File", 'String'>
  }
    

  // Custom InputTypes
  /**
   * File findUnique
   */
  export type FileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findUniqueOrThrow
   */
  export type FileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File findFirst
   */
  export type FileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findFirstOrThrow
   */
  export type FileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which File to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File findMany
   */
  export type FileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FileOrderByWithRelationInput | FileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FileScalarFieldEnum | FileScalarFieldEnum[]
  }

  /**
   * File create
   */
  export type FileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to create a File.
     */
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }

  /**
   * File createMany
   */
  export type FileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * File createManyAndReturn
   */
  export type FileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FileCreateManyInput | FileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * File update
   */
  export type FileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The data needed to update a File.
     */
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File updateMany
   */
  export type FileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * File updateManyAndReturn
   */
  export type FileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * File upsert
   */
  export type FileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * The filter to search for the File to update in case it exists.
     */
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     */
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }

  /**
   * File delete
   */
  export type FileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
    /**
     * Filter which File to delete.
     */
    where: FileWhereUniqueInput
  }

  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FileWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * File without action
   */
  export type FileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the File
     */
    select?: FileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the File
     */
    omit?: FileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FileInclude<ExtArgs> | null
  }


  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    type_id: number | null
  }

  export type TypeSumAggregateOutputType = {
    type_id: number | null
  }

  export type TypeMinAggregateOutputType = {
    type_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TypeMaxAggregateOutputType = {
    type_id: number | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TypeCountAggregateOutputType = {
    type_id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    type_id?: true
  }

  export type TypeSumAggregateInputType = {
    type_id?: true
  }

  export type TypeMinAggregateInputType = {
    type_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type TypeMaxAggregateInputType = {
    type_id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type TypeCountAggregateInputType = {
    type_id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    type_id: number
    name: string
    created_at: Date
    updated_at: Date
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    statistics?: boolean | Type$statisticsArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    type_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    type_id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"type_id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["type"]>
  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    statistics?: boolean | Type$statisticsArgs<ExtArgs>
    _count?: boolean | TypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      statistics: Prisma.$StatisticPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      type_id: number
      name: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["type"]>
    composites: {}
  }

  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TypeFindUniqueArgs>(args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Type that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs>(args: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TypeFindFirstArgs>(args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs>(args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `type_id`
     * const typeWithType_idOnly = await prisma.type.findMany({ select: { type_id: true } })
     * 
     */
    findMany<T extends TypeFindManyArgs>(args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
     */
    create<T extends TypeCreateArgs>(args: SelectSubset<T, TypeCreateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Types.
     * @param {TypeCreateManyArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TypeCreateManyArgs>(args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Types and returns the data saved in the database.
     * @param {TypeCreateManyAndReturnArgs} args - Arguments to create many Types.
     * @example
     * // Create many Types
     * const type = await prisma.type.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Types and only return the `type_id`
     * const typeWithType_idOnly = await prisma.type.createManyAndReturn({
     *   select: { type_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TypeCreateManyAndReturnArgs>(args?: SelectSubset<T, TypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
     */
    delete<T extends TypeDeleteArgs>(args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TypeUpdateArgs>(args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TypeDeleteManyArgs>(args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TypeUpdateManyArgs>(args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types and returns the data updated in the database.
     * @param {TypeUpdateManyAndReturnArgs} args - Arguments to update many Types.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Types and only return the `type_id`
     * const typeWithType_idOnly = await prisma.type.updateManyAndReturn({
     *   select: { type_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TypeUpdateManyAndReturnArgs>(args: SelectSubset<T, TypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
     */
    upsert<T extends TypeUpsertArgs>(args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    statistics<T extends Type$statisticsArgs<ExtArgs> = {}>(args?: Subset<T, Type$statisticsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatisticPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Type model
   */
  interface TypeFieldRefs {
    readonly type_id: FieldRef<"Type", 'Int'>
    readonly name: FieldRef<"Type", 'String'>
    readonly created_at: FieldRef<"Type", 'DateTime'>
    readonly updated_at: FieldRef<"Type", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }

  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }

  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type createManyAndReturn
   */
  export type TypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type updateManyAndReturn
   */
  export type TypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to update.
     */
    limit?: number
  }

  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }

  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }

  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
    /**
     * Limit how many Types to delete.
     */
    limit?: number
  }

  /**
   * Type.statistics
   */
  export type Type$statisticsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Statistic
     */
    select?: StatisticSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Statistic
     */
    omit?: StatisticOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatisticInclude<ExtArgs> | null
    where?: StatisticWhereInput
    orderBy?: StatisticOrderByWithRelationInput | StatisticOrderByWithRelationInput[]
    cursor?: StatisticWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StatisticScalarFieldEnum | StatisticScalarFieldEnum[]
  }

  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Type
     */
    omit?: TypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TypeInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    user_id: 'user_id',
    firstname: 'firstname',
    lastname: 'lastname',
    mail: 'mail',
    password: 'password',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PartnerScalarFieldEnum: {
    parteners_id: 'parteners_id',
    name: 'name',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type PartnerScalarFieldEnum = (typeof PartnerScalarFieldEnum)[keyof typeof PartnerScalarFieldEnum]


  export const TimeScalarFieldEnum: {
    time_id: 'time_id',
    year: 'year',
    event_description: 'event_description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type TimeScalarFieldEnum = (typeof TimeScalarFieldEnum)[keyof typeof TimeScalarFieldEnum]


  export const Job_offerScalarFieldEnum: {
    job_offer_id: 'job_offer_id',
    name: 'name',
    job_type: 'job_type',
    city: 'city',
    image_url: 'image_url',
    link: 'link',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type Job_offerScalarFieldEnum = (typeof Job_offerScalarFieldEnum)[keyof typeof Job_offerScalarFieldEnum]


  export const StructureScalarFieldEnum: {
    structure_id: 'structure_id',
    name: 'name',
    image_url: 'image_url',
    description: 'description',
    address: 'address',
    phone_number: 'phone_number',
    missions: 'missions',
    link: 'link',
    schedule: 'schedule',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type StructureScalarFieldEnum = (typeof StructureScalarFieldEnum)[keyof typeof StructureScalarFieldEnum]


  export const StatisticScalarFieldEnum: {
    statistic_id: 'statistic_id',
    label: 'label',
    value: 'value',
    year: 'year',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    type_id: 'type_id'
  };

  export type StatisticScalarFieldEnum = (typeof StatisticScalarFieldEnum)[keyof typeof StatisticScalarFieldEnum]


  export const NewsScalarFieldEnum: {
    news_id: 'news_id',
    name: 'name',
    image_url: 'image_url',
    link: 'link',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type NewsScalarFieldEnum = (typeof NewsScalarFieldEnum)[keyof typeof NewsScalarFieldEnum]


  export const ValueScalarFieldEnum: {
    value_id: 'value_id',
    name: 'name',
    image_url: 'image_url',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type ValueScalarFieldEnum = (typeof ValueScalarFieldEnum)[keyof typeof ValueScalarFieldEnum]


  export const PositionScalarFieldEnum: {
    position_id: 'position_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PositionScalarFieldEnum = (typeof PositionScalarFieldEnum)[keyof typeof PositionScalarFieldEnum]


  export const JobScalarFieldEnum: {
    job_id: 'job_id',
    function: 'function',
    created_at: 'created_at',
    updated_at: 'updated_at',
    position_id: 'position_id',
    user_id: 'user_id'
  };

  export type JobScalarFieldEnum = (typeof JobScalarFieldEnum)[keyof typeof JobScalarFieldEnum]


  export const StepScalarFieldEnum: {
    step_id: 'step_id',
    name: 'name',
    image_url: 'image_url',
    description: 'description',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id',
    path_id: 'path_id'
  };

  export type StepScalarFieldEnum = (typeof StepScalarFieldEnum)[keyof typeof StepScalarFieldEnum]


  export const PathScalarFieldEnum: {
    path_id: 'path_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PathScalarFieldEnum = (typeof PathScalarFieldEnum)[keyof typeof PathScalarFieldEnum]


  export const FileScalarFieldEnum: {
    file_id: 'file_id',
    name: 'name',
    file: 'file',
    created_at: 'created_at',
    updated_at: 'updated_at',
    user_id: 'user_id'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    type_id: 'type_id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Bytes'
   */
  export type BytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes'>
    


  /**
   * Reference to a field of type 'Bytes[]'
   */
  export type ListBytesFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bytes[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    user_id?: StringFilter<"User"> | string
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    mail?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    partners?: PartnerListRelationFilter
    times?: TimeListRelationFilter
    jobOffers?: Job_offerListRelationFilter
    structures?: StructureListRelationFilter
    statistics?: StatisticListRelationFilter
    news?: NewsListRelationFilter
    values?: ValueListRelationFilter
    jobs?: JobListRelationFilter
    steps?: StepListRelationFilter
    files?: FileListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    user_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    partners?: PartnerOrderByRelationAggregateInput
    times?: TimeOrderByRelationAggregateInput
    jobOffers?: Job_offerOrderByRelationAggregateInput
    structures?: StructureOrderByRelationAggregateInput
    statistics?: StatisticOrderByRelationAggregateInput
    news?: NewsOrderByRelationAggregateInput
    values?: ValueOrderByRelationAggregateInput
    jobs?: JobOrderByRelationAggregateInput
    steps?: StepOrderByRelationAggregateInput
    files?: FileOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    user_id?: string
    mail?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstname?: StringFilter<"User"> | string
    lastname?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    partners?: PartnerListRelationFilter
    times?: TimeListRelationFilter
    jobOffers?: Job_offerListRelationFilter
    structures?: StructureListRelationFilter
    statistics?: StatisticListRelationFilter
    news?: NewsListRelationFilter
    values?: ValueListRelationFilter
    jobs?: JobListRelationFilter
    steps?: StepListRelationFilter
    files?: FileListRelationFilter
  }, "user_id" | "mail">

  export type UserOrderByWithAggregationInput = {
    user_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    user_id?: StringWithAggregatesFilter<"User"> | string
    firstname?: StringWithAggregatesFilter<"User"> | string
    lastname?: StringWithAggregatesFilter<"User"> | string
    mail?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type PartnerWhereInput = {
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    parteners_id?: IntFilter<"Partner"> | number
    name?: StringFilter<"Partner"> | string
    image_url?: StringFilter<"Partner"> | string
    created_at?: DateTimeFilter<"Partner"> | Date | string
    updated_at?: DateTimeFilter<"Partner"> | Date | string
    user_id?: StringFilter<"Partner"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PartnerOrderByWithRelationInput = {
    parteners_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PartnerWhereUniqueInput = Prisma.AtLeast<{
    parteners_id?: number
    AND?: PartnerWhereInput | PartnerWhereInput[]
    OR?: PartnerWhereInput[]
    NOT?: PartnerWhereInput | PartnerWhereInput[]
    name?: StringFilter<"Partner"> | string
    image_url?: StringFilter<"Partner"> | string
    created_at?: DateTimeFilter<"Partner"> | Date | string
    updated_at?: DateTimeFilter<"Partner"> | Date | string
    user_id?: StringFilter<"Partner"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "parteners_id">

  export type PartnerOrderByWithAggregationInput = {
    parteners_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: PartnerCountOrderByAggregateInput
    _avg?: PartnerAvgOrderByAggregateInput
    _max?: PartnerMaxOrderByAggregateInput
    _min?: PartnerMinOrderByAggregateInput
    _sum?: PartnerSumOrderByAggregateInput
  }

  export type PartnerScalarWhereWithAggregatesInput = {
    AND?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    OR?: PartnerScalarWhereWithAggregatesInput[]
    NOT?: PartnerScalarWhereWithAggregatesInput | PartnerScalarWhereWithAggregatesInput[]
    parteners_id?: IntWithAggregatesFilter<"Partner"> | number
    name?: StringWithAggregatesFilter<"Partner"> | string
    image_url?: StringWithAggregatesFilter<"Partner"> | string
    created_at?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Partner"> | Date | string
    user_id?: StringWithAggregatesFilter<"Partner"> | string
  }

  export type TimeWhereInput = {
    AND?: TimeWhereInput | TimeWhereInput[]
    OR?: TimeWhereInput[]
    NOT?: TimeWhereInput | TimeWhereInput[]
    time_id?: IntFilter<"Time"> | number
    year?: IntFilter<"Time"> | number
    event_description?: StringFilter<"Time"> | string
    created_at?: DateTimeFilter<"Time"> | Date | string
    updated_at?: DateTimeFilter<"Time"> | Date | string
    user_id?: StringFilter<"Time"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TimeOrderByWithRelationInput = {
    time_id?: SortOrder
    year?: SortOrder
    event_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TimeWhereUniqueInput = Prisma.AtLeast<{
    time_id?: number
    AND?: TimeWhereInput | TimeWhereInput[]
    OR?: TimeWhereInput[]
    NOT?: TimeWhereInput | TimeWhereInput[]
    year?: IntFilter<"Time"> | number
    event_description?: StringFilter<"Time"> | string
    created_at?: DateTimeFilter<"Time"> | Date | string
    updated_at?: DateTimeFilter<"Time"> | Date | string
    user_id?: StringFilter<"Time"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "time_id">

  export type TimeOrderByWithAggregationInput = {
    time_id?: SortOrder
    year?: SortOrder
    event_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: TimeCountOrderByAggregateInput
    _avg?: TimeAvgOrderByAggregateInput
    _max?: TimeMaxOrderByAggregateInput
    _min?: TimeMinOrderByAggregateInput
    _sum?: TimeSumOrderByAggregateInput
  }

  export type TimeScalarWhereWithAggregatesInput = {
    AND?: TimeScalarWhereWithAggregatesInput | TimeScalarWhereWithAggregatesInput[]
    OR?: TimeScalarWhereWithAggregatesInput[]
    NOT?: TimeScalarWhereWithAggregatesInput | TimeScalarWhereWithAggregatesInput[]
    time_id?: IntWithAggregatesFilter<"Time"> | number
    year?: IntWithAggregatesFilter<"Time"> | number
    event_description?: StringWithAggregatesFilter<"Time"> | string
    created_at?: DateTimeWithAggregatesFilter<"Time"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Time"> | Date | string
    user_id?: StringWithAggregatesFilter<"Time"> | string
  }

  export type Job_offerWhereInput = {
    AND?: Job_offerWhereInput | Job_offerWhereInput[]
    OR?: Job_offerWhereInput[]
    NOT?: Job_offerWhereInput | Job_offerWhereInput[]
    job_offer_id?: IntFilter<"Job_offer"> | number
    name?: StringFilter<"Job_offer"> | string
    job_type?: StringFilter<"Job_offer"> | string
    city?: StringNullableFilter<"Job_offer"> | string | null
    image_url?: StringNullableFilter<"Job_offer"> | string | null
    link?: StringNullableFilter<"Job_offer"> | string | null
    description?: StringFilter<"Job_offer"> | string
    created_at?: DateTimeFilter<"Job_offer"> | Date | string
    updated_at?: DateTimeFilter<"Job_offer"> | Date | string
    user_id?: StringFilter<"Job_offer"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Job_offerOrderByWithRelationInput = {
    job_offer_id?: SortOrder
    name?: SortOrder
    job_type?: SortOrder
    city?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Job_offerWhereUniqueInput = Prisma.AtLeast<{
    job_offer_id?: number
    AND?: Job_offerWhereInput | Job_offerWhereInput[]
    OR?: Job_offerWhereInput[]
    NOT?: Job_offerWhereInput | Job_offerWhereInput[]
    name?: StringFilter<"Job_offer"> | string
    job_type?: StringFilter<"Job_offer"> | string
    city?: StringNullableFilter<"Job_offer"> | string | null
    image_url?: StringNullableFilter<"Job_offer"> | string | null
    link?: StringNullableFilter<"Job_offer"> | string | null
    description?: StringFilter<"Job_offer"> | string
    created_at?: DateTimeFilter<"Job_offer"> | Date | string
    updated_at?: DateTimeFilter<"Job_offer"> | Date | string
    user_id?: StringFilter<"Job_offer"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "job_offer_id">

  export type Job_offerOrderByWithAggregationInput = {
    job_offer_id?: SortOrder
    name?: SortOrder
    job_type?: SortOrder
    city?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: Job_offerCountOrderByAggregateInput
    _avg?: Job_offerAvgOrderByAggregateInput
    _max?: Job_offerMaxOrderByAggregateInput
    _min?: Job_offerMinOrderByAggregateInput
    _sum?: Job_offerSumOrderByAggregateInput
  }

  export type Job_offerScalarWhereWithAggregatesInput = {
    AND?: Job_offerScalarWhereWithAggregatesInput | Job_offerScalarWhereWithAggregatesInput[]
    OR?: Job_offerScalarWhereWithAggregatesInput[]
    NOT?: Job_offerScalarWhereWithAggregatesInput | Job_offerScalarWhereWithAggregatesInput[]
    job_offer_id?: IntWithAggregatesFilter<"Job_offer"> | number
    name?: StringWithAggregatesFilter<"Job_offer"> | string
    job_type?: StringWithAggregatesFilter<"Job_offer"> | string
    city?: StringNullableWithAggregatesFilter<"Job_offer"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Job_offer"> | string | null
    link?: StringNullableWithAggregatesFilter<"Job_offer"> | string | null
    description?: StringWithAggregatesFilter<"Job_offer"> | string
    created_at?: DateTimeWithAggregatesFilter<"Job_offer"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Job_offer"> | Date | string
    user_id?: StringWithAggregatesFilter<"Job_offer"> | string
  }

  export type StructureWhereInput = {
    AND?: StructureWhereInput | StructureWhereInput[]
    OR?: StructureWhereInput[]
    NOT?: StructureWhereInput | StructureWhereInput[]
    structure_id?: IntFilter<"Structure"> | number
    name?: StringFilter<"Structure"> | string
    image_url?: StringNullableFilter<"Structure"> | string | null
    description?: StringFilter<"Structure"> | string
    address?: StringNullableFilter<"Structure"> | string | null
    phone_number?: StringNullableFilter<"Structure"> | string | null
    missions?: StringNullableFilter<"Structure"> | string | null
    link?: StringNullableFilter<"Structure"> | string | null
    schedule?: StringNullableFilter<"Structure"> | string | null
    created_at?: DateTimeFilter<"Structure"> | Date | string
    updated_at?: DateTimeFilter<"Structure"> | Date | string
    user_id?: StringFilter<"Structure"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type StructureOrderByWithRelationInput = {
    structure_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    missions?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type StructureWhereUniqueInput = Prisma.AtLeast<{
    structure_id?: number
    AND?: StructureWhereInput | StructureWhereInput[]
    OR?: StructureWhereInput[]
    NOT?: StructureWhereInput | StructureWhereInput[]
    name?: StringFilter<"Structure"> | string
    image_url?: StringNullableFilter<"Structure"> | string | null
    description?: StringFilter<"Structure"> | string
    address?: StringNullableFilter<"Structure"> | string | null
    phone_number?: StringNullableFilter<"Structure"> | string | null
    missions?: StringNullableFilter<"Structure"> | string | null
    link?: StringNullableFilter<"Structure"> | string | null
    schedule?: StringNullableFilter<"Structure"> | string | null
    created_at?: DateTimeFilter<"Structure"> | Date | string
    updated_at?: DateTimeFilter<"Structure"> | Date | string
    user_id?: StringFilter<"Structure"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "structure_id">

  export type StructureOrderByWithAggregationInput = {
    structure_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrder
    address?: SortOrderInput | SortOrder
    phone_number?: SortOrderInput | SortOrder
    missions?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    schedule?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: StructureCountOrderByAggregateInput
    _avg?: StructureAvgOrderByAggregateInput
    _max?: StructureMaxOrderByAggregateInput
    _min?: StructureMinOrderByAggregateInput
    _sum?: StructureSumOrderByAggregateInput
  }

  export type StructureScalarWhereWithAggregatesInput = {
    AND?: StructureScalarWhereWithAggregatesInput | StructureScalarWhereWithAggregatesInput[]
    OR?: StructureScalarWhereWithAggregatesInput[]
    NOT?: StructureScalarWhereWithAggregatesInput | StructureScalarWhereWithAggregatesInput[]
    structure_id?: IntWithAggregatesFilter<"Structure"> | number
    name?: StringWithAggregatesFilter<"Structure"> | string
    image_url?: StringNullableWithAggregatesFilter<"Structure"> | string | null
    description?: StringWithAggregatesFilter<"Structure"> | string
    address?: StringNullableWithAggregatesFilter<"Structure"> | string | null
    phone_number?: StringNullableWithAggregatesFilter<"Structure"> | string | null
    missions?: StringNullableWithAggregatesFilter<"Structure"> | string | null
    link?: StringNullableWithAggregatesFilter<"Structure"> | string | null
    schedule?: StringNullableWithAggregatesFilter<"Structure"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Structure"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Structure"> | Date | string
    user_id?: StringWithAggregatesFilter<"Structure"> | string
  }

  export type StatisticWhereInput = {
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    statistic_id?: IntFilter<"Statistic"> | number
    label?: StringFilter<"Statistic"> | string
    value?: IntFilter<"Statistic"> | number
    year?: IntFilter<"Statistic"> | number
    created_at?: DateTimeFilter<"Statistic"> | Date | string
    updated_at?: DateTimeFilter<"Statistic"> | Date | string
    user_id?: StringFilter<"Statistic"> | string
    type_id?: IntFilter<"Statistic"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
  }

  export type StatisticOrderByWithRelationInput = {
    statistic_id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
    user?: UserOrderByWithRelationInput
    type?: TypeOrderByWithRelationInput
  }

  export type StatisticWhereUniqueInput = Prisma.AtLeast<{
    statistic_id?: number
    AND?: StatisticWhereInput | StatisticWhereInput[]
    OR?: StatisticWhereInput[]
    NOT?: StatisticWhereInput | StatisticWhereInput[]
    label?: StringFilter<"Statistic"> | string
    value?: IntFilter<"Statistic"> | number
    year?: IntFilter<"Statistic"> | number
    created_at?: DateTimeFilter<"Statistic"> | Date | string
    updated_at?: DateTimeFilter<"Statistic"> | Date | string
    user_id?: StringFilter<"Statistic"> | string
    type_id?: IntFilter<"Statistic"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    type?: XOR<TypeScalarRelationFilter, TypeWhereInput>
  }, "statistic_id">

  export type StatisticOrderByWithAggregationInput = {
    statistic_id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
    _count?: StatisticCountOrderByAggregateInput
    _avg?: StatisticAvgOrderByAggregateInput
    _max?: StatisticMaxOrderByAggregateInput
    _min?: StatisticMinOrderByAggregateInput
    _sum?: StatisticSumOrderByAggregateInput
  }

  export type StatisticScalarWhereWithAggregatesInput = {
    AND?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    OR?: StatisticScalarWhereWithAggregatesInput[]
    NOT?: StatisticScalarWhereWithAggregatesInput | StatisticScalarWhereWithAggregatesInput[]
    statistic_id?: IntWithAggregatesFilter<"Statistic"> | number
    label?: StringWithAggregatesFilter<"Statistic"> | string
    value?: IntWithAggregatesFilter<"Statistic"> | number
    year?: IntWithAggregatesFilter<"Statistic"> | number
    created_at?: DateTimeWithAggregatesFilter<"Statistic"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Statistic"> | Date | string
    user_id?: StringWithAggregatesFilter<"Statistic"> | string
    type_id?: IntWithAggregatesFilter<"Statistic"> | number
  }

  export type NewsWhereInput = {
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    news_id?: IntFilter<"News"> | number
    name?: StringFilter<"News"> | string
    image_url?: StringNullableFilter<"News"> | string | null
    link?: StringNullableFilter<"News"> | string | null
    description?: StringFilter<"News"> | string
    created_at?: DateTimeFilter<"News"> | Date | string
    updated_at?: DateTimeFilter<"News"> | Date | string
    user_id?: StringFilter<"News"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NewsOrderByWithRelationInput = {
    news_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NewsWhereUniqueInput = Prisma.AtLeast<{
    news_id?: number
    AND?: NewsWhereInput | NewsWhereInput[]
    OR?: NewsWhereInput[]
    NOT?: NewsWhereInput | NewsWhereInput[]
    name?: StringFilter<"News"> | string
    image_url?: StringNullableFilter<"News"> | string | null
    link?: StringNullableFilter<"News"> | string | null
    description?: StringFilter<"News"> | string
    created_at?: DateTimeFilter<"News"> | Date | string
    updated_at?: DateTimeFilter<"News"> | Date | string
    user_id?: StringFilter<"News"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "news_id">

  export type NewsOrderByWithAggregationInput = {
    news_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: NewsCountOrderByAggregateInput
    _avg?: NewsAvgOrderByAggregateInput
    _max?: NewsMaxOrderByAggregateInput
    _min?: NewsMinOrderByAggregateInput
    _sum?: NewsSumOrderByAggregateInput
  }

  export type NewsScalarWhereWithAggregatesInput = {
    AND?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    OR?: NewsScalarWhereWithAggregatesInput[]
    NOT?: NewsScalarWhereWithAggregatesInput | NewsScalarWhereWithAggregatesInput[]
    news_id?: IntWithAggregatesFilter<"News"> | number
    name?: StringWithAggregatesFilter<"News"> | string
    image_url?: StringNullableWithAggregatesFilter<"News"> | string | null
    link?: StringNullableWithAggregatesFilter<"News"> | string | null
    description?: StringWithAggregatesFilter<"News"> | string
    created_at?: DateTimeWithAggregatesFilter<"News"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"News"> | Date | string
    user_id?: StringWithAggregatesFilter<"News"> | string
  }

  export type ValueWhereInput = {
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    value_id?: IntFilter<"Value"> | number
    name?: StringFilter<"Value"> | string
    image_url?: StringNullableFilter<"Value"> | string | null
    created_at?: DateTimeFilter<"Value"> | Date | string
    updated_at?: DateTimeFilter<"Value"> | Date | string
    user_id?: StringFilter<"Value"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ValueOrderByWithRelationInput = {
    value_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ValueWhereUniqueInput = Prisma.AtLeast<{
    value_id?: number
    AND?: ValueWhereInput | ValueWhereInput[]
    OR?: ValueWhereInput[]
    NOT?: ValueWhereInput | ValueWhereInput[]
    name?: StringFilter<"Value"> | string
    image_url?: StringNullableFilter<"Value"> | string | null
    created_at?: DateTimeFilter<"Value"> | Date | string
    updated_at?: DateTimeFilter<"Value"> | Date | string
    user_id?: StringFilter<"Value"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "value_id">

  export type ValueOrderByWithAggregationInput = {
    value_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: ValueCountOrderByAggregateInput
    _avg?: ValueAvgOrderByAggregateInput
    _max?: ValueMaxOrderByAggregateInput
    _min?: ValueMinOrderByAggregateInput
    _sum?: ValueSumOrderByAggregateInput
  }

  export type ValueScalarWhereWithAggregatesInput = {
    AND?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    OR?: ValueScalarWhereWithAggregatesInput[]
    NOT?: ValueScalarWhereWithAggregatesInput | ValueScalarWhereWithAggregatesInput[]
    value_id?: IntWithAggregatesFilter<"Value"> | number
    name?: StringWithAggregatesFilter<"Value"> | string
    image_url?: StringNullableWithAggregatesFilter<"Value"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Value"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Value"> | Date | string
    user_id?: StringWithAggregatesFilter<"Value"> | string
  }

  export type PositionWhereInput = {
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    position_id?: IntFilter<"Position"> | number
    name?: StringFilter<"Position"> | string
    created_at?: DateTimeFilter<"Position"> | Date | string
    updated_at?: DateTimeFilter<"Position"> | Date | string
    jobs?: JobListRelationFilter
  }

  export type PositionOrderByWithRelationInput = {
    position_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    jobs?: JobOrderByRelationAggregateInput
  }

  export type PositionWhereUniqueInput = Prisma.AtLeast<{
    position_id?: number
    AND?: PositionWhereInput | PositionWhereInput[]
    OR?: PositionWhereInput[]
    NOT?: PositionWhereInput | PositionWhereInput[]
    name?: StringFilter<"Position"> | string
    created_at?: DateTimeFilter<"Position"> | Date | string
    updated_at?: DateTimeFilter<"Position"> | Date | string
    jobs?: JobListRelationFilter
  }, "position_id">

  export type PositionOrderByWithAggregationInput = {
    position_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PositionCountOrderByAggregateInput
    _avg?: PositionAvgOrderByAggregateInput
    _max?: PositionMaxOrderByAggregateInput
    _min?: PositionMinOrderByAggregateInput
    _sum?: PositionSumOrderByAggregateInput
  }

  export type PositionScalarWhereWithAggregatesInput = {
    AND?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    OR?: PositionScalarWhereWithAggregatesInput[]
    NOT?: PositionScalarWhereWithAggregatesInput | PositionScalarWhereWithAggregatesInput[]
    position_id?: IntWithAggregatesFilter<"Position"> | number
    name?: StringWithAggregatesFilter<"Position"> | string
    created_at?: DateTimeWithAggregatesFilter<"Position"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Position"> | Date | string
  }

  export type JobWhereInput = {
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    job_id?: IntFilter<"Job"> | number
    function?: StringFilter<"Job"> | string
    created_at?: DateTimeFilter<"Job"> | Date | string
    updated_at?: DateTimeFilter<"Job"> | Date | string
    position_id?: IntFilter<"Job"> | number
    user_id?: StringFilter<"Job"> | string
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type JobOrderByWithRelationInput = {
    job_id?: SortOrder
    function?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    position_id?: SortOrder
    user_id?: SortOrder
    position?: PositionOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type JobWhereUniqueInput = Prisma.AtLeast<{
    job_id?: number
    AND?: JobWhereInput | JobWhereInput[]
    OR?: JobWhereInput[]
    NOT?: JobWhereInput | JobWhereInput[]
    function?: StringFilter<"Job"> | string
    created_at?: DateTimeFilter<"Job"> | Date | string
    updated_at?: DateTimeFilter<"Job"> | Date | string
    position_id?: IntFilter<"Job"> | number
    user_id?: StringFilter<"Job"> | string
    position?: XOR<PositionScalarRelationFilter, PositionWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "job_id">

  export type JobOrderByWithAggregationInput = {
    job_id?: SortOrder
    function?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    position_id?: SortOrder
    user_id?: SortOrder
    _count?: JobCountOrderByAggregateInput
    _avg?: JobAvgOrderByAggregateInput
    _max?: JobMaxOrderByAggregateInput
    _min?: JobMinOrderByAggregateInput
    _sum?: JobSumOrderByAggregateInput
  }

  export type JobScalarWhereWithAggregatesInput = {
    AND?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    OR?: JobScalarWhereWithAggregatesInput[]
    NOT?: JobScalarWhereWithAggregatesInput | JobScalarWhereWithAggregatesInput[]
    job_id?: IntWithAggregatesFilter<"Job"> | number
    function?: StringWithAggregatesFilter<"Job"> | string
    created_at?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Job"> | Date | string
    position_id?: IntWithAggregatesFilter<"Job"> | number
    user_id?: StringWithAggregatesFilter<"Job"> | string
  }

  export type StepWhereInput = {
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    step_id?: IntFilter<"Step"> | number
    name?: StringFilter<"Step"> | string
    image_url?: StringNullableFilter<"Step"> | string | null
    description?: StringFilter<"Step"> | string
    created_at?: DateTimeFilter<"Step"> | Date | string
    updated_at?: DateTimeFilter<"Step"> | Date | string
    user_id?: StringFilter<"Step"> | string
    path_id?: IntFilter<"Step"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    path?: XOR<PathScalarRelationFilter, PathWhereInput>
  }

  export type StepOrderByWithRelationInput = {
    step_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    path_id?: SortOrder
    user?: UserOrderByWithRelationInput
    path?: PathOrderByWithRelationInput
  }

  export type StepWhereUniqueInput = Prisma.AtLeast<{
    step_id?: number
    AND?: StepWhereInput | StepWhereInput[]
    OR?: StepWhereInput[]
    NOT?: StepWhereInput | StepWhereInput[]
    name?: StringFilter<"Step"> | string
    image_url?: StringNullableFilter<"Step"> | string | null
    description?: StringFilter<"Step"> | string
    created_at?: DateTimeFilter<"Step"> | Date | string
    updated_at?: DateTimeFilter<"Step"> | Date | string
    user_id?: StringFilter<"Step"> | string
    path_id?: IntFilter<"Step"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    path?: XOR<PathScalarRelationFilter, PathWhereInput>
  }, "step_id">

  export type StepOrderByWithAggregationInput = {
    step_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    path_id?: SortOrder
    _count?: StepCountOrderByAggregateInput
    _avg?: StepAvgOrderByAggregateInput
    _max?: StepMaxOrderByAggregateInput
    _min?: StepMinOrderByAggregateInput
    _sum?: StepSumOrderByAggregateInput
  }

  export type StepScalarWhereWithAggregatesInput = {
    AND?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    OR?: StepScalarWhereWithAggregatesInput[]
    NOT?: StepScalarWhereWithAggregatesInput | StepScalarWhereWithAggregatesInput[]
    step_id?: IntWithAggregatesFilter<"Step"> | number
    name?: StringWithAggregatesFilter<"Step"> | string
    image_url?: StringNullableWithAggregatesFilter<"Step"> | string | null
    description?: StringWithAggregatesFilter<"Step"> | string
    created_at?: DateTimeWithAggregatesFilter<"Step"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Step"> | Date | string
    user_id?: StringWithAggregatesFilter<"Step"> | string
    path_id?: IntWithAggregatesFilter<"Step"> | number
  }

  export type PathWhereInput = {
    AND?: PathWhereInput | PathWhereInput[]
    OR?: PathWhereInput[]
    NOT?: PathWhereInput | PathWhereInput[]
    path_id?: IntFilter<"Path"> | number
    name?: StringFilter<"Path"> | string
    created_at?: DateTimeFilter<"Path"> | Date | string
    updated_at?: DateTimeFilter<"Path"> | Date | string
    steps?: StepListRelationFilter
  }

  export type PathOrderByWithRelationInput = {
    path_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    steps?: StepOrderByRelationAggregateInput
  }

  export type PathWhereUniqueInput = Prisma.AtLeast<{
    path_id?: number
    name?: string
    AND?: PathWhereInput | PathWhereInput[]
    OR?: PathWhereInput[]
    NOT?: PathWhereInput | PathWhereInput[]
    created_at?: DateTimeFilter<"Path"> | Date | string
    updated_at?: DateTimeFilter<"Path"> | Date | string
    steps?: StepListRelationFilter
  }, "path_id" | "name">

  export type PathOrderByWithAggregationInput = {
    path_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PathCountOrderByAggregateInput
    _avg?: PathAvgOrderByAggregateInput
    _max?: PathMaxOrderByAggregateInput
    _min?: PathMinOrderByAggregateInput
    _sum?: PathSumOrderByAggregateInput
  }

  export type PathScalarWhereWithAggregatesInput = {
    AND?: PathScalarWhereWithAggregatesInput | PathScalarWhereWithAggregatesInput[]
    OR?: PathScalarWhereWithAggregatesInput[]
    NOT?: PathScalarWhereWithAggregatesInput | PathScalarWhereWithAggregatesInput[]
    path_id?: IntWithAggregatesFilter<"Path"> | number
    name?: StringWithAggregatesFilter<"Path"> | string
    created_at?: DateTimeWithAggregatesFilter<"Path"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Path"> | Date | string
  }

  export type FileWhereInput = {
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    file_id?: IntFilter<"File"> | number
    name?: StringFilter<"File"> | string
    file?: BytesFilter<"File"> | Uint8Array
    created_at?: DateTimeFilter<"File"> | Date | string
    updated_at?: DateTimeFilter<"File"> | Date | string
    user_id?: StringFilter<"File"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type FileOrderByWithRelationInput = {
    file_id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FileWhereUniqueInput = Prisma.AtLeast<{
    file_id?: number
    AND?: FileWhereInput | FileWhereInput[]
    OR?: FileWhereInput[]
    NOT?: FileWhereInput | FileWhereInput[]
    name?: StringFilter<"File"> | string
    file?: BytesFilter<"File"> | Uint8Array
    created_at?: DateTimeFilter<"File"> | Date | string
    updated_at?: DateTimeFilter<"File"> | Date | string
    user_id?: StringFilter<"File"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "file_id">

  export type FileOrderByWithAggregationInput = {
    file_id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    _count?: FileCountOrderByAggregateInput
    _avg?: FileAvgOrderByAggregateInput
    _max?: FileMaxOrderByAggregateInput
    _min?: FileMinOrderByAggregateInput
    _sum?: FileSumOrderByAggregateInput
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    OR?: FileScalarWhereWithAggregatesInput[]
    NOT?: FileScalarWhereWithAggregatesInput | FileScalarWhereWithAggregatesInput[]
    file_id?: IntWithAggregatesFilter<"File"> | number
    name?: StringWithAggregatesFilter<"File"> | string
    file?: BytesWithAggregatesFilter<"File"> | Uint8Array
    created_at?: DateTimeWithAggregatesFilter<"File"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"File"> | Date | string
    user_id?: StringWithAggregatesFilter<"File"> | string
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    type_id?: IntFilter<"Type"> | number
    name?: StringFilter<"Type"> | string
    created_at?: DateTimeFilter<"Type"> | Date | string
    updated_at?: DateTimeFilter<"Type"> | Date | string
    statistics?: StatisticListRelationFilter
  }

  export type TypeOrderByWithRelationInput = {
    type_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    statistics?: StatisticOrderByRelationAggregateInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    type_id?: number
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    name?: StringFilter<"Type"> | string
    created_at?: DateTimeFilter<"Type"> | Date | string
    updated_at?: DateTimeFilter<"Type"> | Date | string
    statistics?: StatisticListRelationFilter
  }, "type_id">

  export type TypeOrderByWithAggregationInput = {
    type_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _avg?: TypeAvgOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
    _sum?: TypeSumOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    type_id?: IntWithAggregatesFilter<"Type"> | number
    name?: StringWithAggregatesFilter<"Type"> | string
    created_at?: DateTimeWithAggregatesFilter<"Type"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Type"> | Date | string
  }

  export type UserCreateInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    times?: TimeCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    times?: TimeUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type UserUpdateManyMutationInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerCreateInput = {
    name: string
    image_url: string
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutPartnersInput
  }

  export type PartnerUncheckedCreateInput = {
    parteners_id?: number
    name: string
    image_url: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type PartnerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPartnersNestedInput
  }

  export type PartnerUncheckedUpdateInput = {
    parteners_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type PartnerCreateManyInput = {
    parteners_id?: number
    name: string
    image_url: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type PartnerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateManyInput = {
    parteners_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TimeCreateInput = {
    year: number
    event_description: string
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutTimesInput
  }

  export type TimeUncheckedCreateInput = {
    time_id?: number
    year: number
    event_description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type TimeUpdateInput = {
    year?: IntFieldUpdateOperationsInput | number
    event_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTimesNestedInput
  }

  export type TimeUncheckedUpdateInput = {
    time_id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    event_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TimeCreateManyInput = {
    time_id?: number
    year: number
    event_description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type TimeUpdateManyMutationInput = {
    year?: IntFieldUpdateOperationsInput | number
    event_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeUncheckedUpdateManyInput = {
    time_id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    event_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type Job_offerCreateInput = {
    name: string
    job_type: string
    city?: string | null
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutJobOffersInput
  }

  export type Job_offerUncheckedCreateInput = {
    job_offer_id?: number
    name: string
    job_type: string
    city?: string | null
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type Job_offerUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobOffersNestedInput
  }

  export type Job_offerUncheckedUpdateInput = {
    job_offer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type Job_offerCreateManyInput = {
    job_offer_id?: number
    name: string
    job_type: string
    city?: string | null
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type Job_offerUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Job_offerUncheckedUpdateManyInput = {
    job_offer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StructureCreateInput = {
    name: string
    image_url?: string | null
    description: string
    address?: string | null
    phone_number?: string | null
    missions?: string | null
    link?: string | null
    schedule?: string | null
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutStructuresInput
  }

  export type StructureUncheckedCreateInput = {
    structure_id?: number
    name: string
    image_url?: string | null
    description: string
    address?: string | null
    phone_number?: string | null
    missions?: string | null
    link?: string | null
    schedule?: string | null
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type StructureUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    missions?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStructuresNestedInput
  }

  export type StructureUncheckedUpdateInput = {
    structure_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    missions?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StructureCreateManyInput = {
    structure_id?: number
    name: string
    image_url?: string | null
    description: string
    address?: string | null
    phone_number?: string | null
    missions?: string | null
    link?: string | null
    schedule?: string | null
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type StructureUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    missions?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StructureUncheckedUpdateManyInput = {
    structure_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    missions?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StatisticCreateInput = {
    label: string
    value: number
    year: number
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutStatisticsInput
    type: TypeCreateNestedOneWithoutStatisticsInput
  }

  export type StatisticUncheckedCreateInput = {
    statistic_id?: number
    label: string
    value: number
    year: number
    created_at: Date | string
    updated_at: Date | string
    user_id: string
    type_id: number
  }

  export type StatisticUpdateInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatisticsNestedInput
    type?: TypeUpdateOneRequiredWithoutStatisticsNestedInput
  }

  export type StatisticUncheckedUpdateInput = {
    statistic_id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    type_id?: IntFieldUpdateOperationsInput | number
  }

  export type StatisticCreateManyInput = {
    statistic_id?: number
    label: string
    value: number
    year: number
    created_at: Date | string
    updated_at: Date | string
    user_id: string
    type_id: number
  }

  export type StatisticUpdateManyMutationInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUncheckedUpdateManyInput = {
    statistic_id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    type_id?: IntFieldUpdateOperationsInput | number
  }

  export type NewsCreateInput = {
    name: string
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutNewsInput
  }

  export type NewsUncheckedCreateInput = {
    news_id?: number
    name: string
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type NewsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewsNestedInput
  }

  export type NewsUncheckedUpdateInput = {
    news_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type NewsCreateManyInput = {
    news_id?: number
    name: string
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type NewsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyInput = {
    news_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ValueCreateInput = {
    name: string
    image_url?: string | null
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutValuesInput
  }

  export type ValueUncheckedCreateInput = {
    value_id?: number
    name: string
    image_url?: string | null
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type ValueUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutValuesNestedInput
  }

  export type ValueUncheckedUpdateInput = {
    value_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ValueCreateManyInput = {
    value_id?: number
    name: string
    image_url?: string | null
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type ValueUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValueUncheckedUpdateManyInput = {
    value_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type PositionCreateInput = {
    name: string
    created_at: Date | string
    updated_at: Date | string
    jobs?: JobCreateNestedManyWithoutPositionInput
  }

  export type PositionUncheckedCreateInput = {
    position_id?: number
    name: string
    created_at: Date | string
    updated_at: Date | string
    jobs?: JobUncheckedCreateNestedManyWithoutPositionInput
  }

  export type PositionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUpdateManyWithoutPositionNestedInput
  }

  export type PositionUncheckedUpdateInput = {
    position_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    jobs?: JobUncheckedUpdateManyWithoutPositionNestedInput
  }

  export type PositionCreateManyInput = {
    position_id?: number
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type PositionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateManyInput = {
    position_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateInput = {
    function: string
    created_at: Date | string
    updated_at: Date | string
    position: PositionCreateNestedOneWithoutJobsInput
    user: UserCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateInput = {
    job_id?: number
    function: string
    created_at: Date | string
    updated_at: Date | string
    position_id: number
    user_id: string
  }

  export type JobUpdateInput = {
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutJobsNestedInput
    user?: UserUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    position_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type JobCreateManyInput = {
    job_id?: number
    function: string
    created_at: Date | string
    updated_at: Date | string
    position_id: number
    user_id: string
  }

  export type JobUpdateManyMutationInput = {
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUncheckedUpdateManyInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    position_id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StepCreateInput = {
    name: string
    image_url?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutStepsInput
    path: PathCreateNestedOneWithoutStepsInput
  }

  export type StepUncheckedCreateInput = {
    step_id?: number
    name: string
    image_url?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
    path_id: number
  }

  export type StepUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStepsNestedInput
    path?: PathUpdateOneRequiredWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateInput = {
    step_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    path_id?: IntFieldUpdateOperationsInput | number
  }

  export type StepCreateManyInput = {
    step_id?: number
    name: string
    image_url?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
    path_id: number
  }

  export type StepUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepUncheckedUpdateManyInput = {
    step_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
    path_id?: IntFieldUpdateOperationsInput | number
  }

  export type PathCreateInput = {
    name: string
    created_at: Date | string
    updated_at: Date | string
    steps?: StepCreateNestedManyWithoutPathInput
  }

  export type PathUncheckedCreateInput = {
    path_id?: number
    name: string
    created_at: Date | string
    updated_at: Date | string
    steps?: StepUncheckedCreateNestedManyWithoutPathInput
  }

  export type PathUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUpdateManyWithoutPathNestedInput
  }

  export type PathUncheckedUpdateInput = {
    path_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    steps?: StepUncheckedUpdateManyWithoutPathNestedInput
  }

  export type PathCreateManyInput = {
    path_id?: number
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type PathUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PathUncheckedUpdateManyInput = {
    path_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileCreateInput = {
    name: string
    file: Uint8Array
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    file_id?: number
    name: string
    file: Uint8Array
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type FileUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFilesNestedInput
  }

  export type FileUncheckedUpdateInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type FileCreateManyInput = {
    file_id?: number
    name: string
    file: Uint8Array
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type FileUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type TypeCreateInput = {
    name: string
    created_at: Date | string
    updated_at: Date | string
    statistics?: StatisticCreateNestedManyWithoutTypeInput
  }

  export type TypeUncheckedCreateInput = {
    type_id?: number
    name: string
    created_at: Date | string
    updated_at: Date | string
    statistics?: StatisticUncheckedCreateNestedManyWithoutTypeInput
  }

  export type TypeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    statistics?: StatisticUpdateManyWithoutTypeNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    statistics?: StatisticUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type TypeCreateManyInput = {
    type_id?: number
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type TypeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeUncheckedUpdateManyInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PartnerListRelationFilter = {
    every?: PartnerWhereInput
    some?: PartnerWhereInput
    none?: PartnerWhereInput
  }

  export type TimeListRelationFilter = {
    every?: TimeWhereInput
    some?: TimeWhereInput
    none?: TimeWhereInput
  }

  export type Job_offerListRelationFilter = {
    every?: Job_offerWhereInput
    some?: Job_offerWhereInput
    none?: Job_offerWhereInput
  }

  export type StructureListRelationFilter = {
    every?: StructureWhereInput
    some?: StructureWhereInput
    none?: StructureWhereInput
  }

  export type StatisticListRelationFilter = {
    every?: StatisticWhereInput
    some?: StatisticWhereInput
    none?: StatisticWhereInput
  }

  export type NewsListRelationFilter = {
    every?: NewsWhereInput
    some?: NewsWhereInput
    none?: NewsWhereInput
  }

  export type ValueListRelationFilter = {
    every?: ValueWhereInput
    some?: ValueWhereInput
    none?: ValueWhereInput
  }

  export type JobListRelationFilter = {
    every?: JobWhereInput
    some?: JobWhereInput
    none?: JobWhereInput
  }

  export type StepListRelationFilter = {
    every?: StepWhereInput
    some?: StepWhereInput
    none?: StepWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type PartnerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TimeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Job_offerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StructureOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatisticOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ValueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type JobOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StepOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FileOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    user_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    user_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    user_id?: SortOrder
    firstname?: SortOrder
    lastname?: SortOrder
    mail?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PartnerCountOrderByAggregateInput = {
    parteners_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type PartnerAvgOrderByAggregateInput = {
    parteners_id?: SortOrder
  }

  export type PartnerMaxOrderByAggregateInput = {
    parteners_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type PartnerMinOrderByAggregateInput = {
    parteners_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type PartnerSumOrderByAggregateInput = {
    parteners_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type TimeCountOrderByAggregateInput = {
    time_id?: SortOrder
    year?: SortOrder
    event_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type TimeAvgOrderByAggregateInput = {
    time_id?: SortOrder
    year?: SortOrder
  }

  export type TimeMaxOrderByAggregateInput = {
    time_id?: SortOrder
    year?: SortOrder
    event_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type TimeMinOrderByAggregateInput = {
    time_id?: SortOrder
    year?: SortOrder
    event_description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type TimeSumOrderByAggregateInput = {
    time_id?: SortOrder
    year?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type Job_offerCountOrderByAggregateInput = {
    job_offer_id?: SortOrder
    name?: SortOrder
    job_type?: SortOrder
    city?: SortOrder
    image_url?: SortOrder
    link?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type Job_offerAvgOrderByAggregateInput = {
    job_offer_id?: SortOrder
  }

  export type Job_offerMaxOrderByAggregateInput = {
    job_offer_id?: SortOrder
    name?: SortOrder
    job_type?: SortOrder
    city?: SortOrder
    image_url?: SortOrder
    link?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type Job_offerMinOrderByAggregateInput = {
    job_offer_id?: SortOrder
    name?: SortOrder
    job_type?: SortOrder
    city?: SortOrder
    image_url?: SortOrder
    link?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type Job_offerSumOrderByAggregateInput = {
    job_offer_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StructureCountOrderByAggregateInput = {
    structure_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    missions?: SortOrder
    link?: SortOrder
    schedule?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type StructureAvgOrderByAggregateInput = {
    structure_id?: SortOrder
  }

  export type StructureMaxOrderByAggregateInput = {
    structure_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    missions?: SortOrder
    link?: SortOrder
    schedule?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type StructureMinOrderByAggregateInput = {
    structure_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    address?: SortOrder
    phone_number?: SortOrder
    missions?: SortOrder
    link?: SortOrder
    schedule?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type StructureSumOrderByAggregateInput = {
    structure_id?: SortOrder
  }

  export type TypeScalarRelationFilter = {
    is?: TypeWhereInput
    isNot?: TypeWhereInput
  }

  export type StatisticCountOrderByAggregateInput = {
    statistic_id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
  }

  export type StatisticAvgOrderByAggregateInput = {
    statistic_id?: SortOrder
    value?: SortOrder
    year?: SortOrder
    type_id?: SortOrder
  }

  export type StatisticMaxOrderByAggregateInput = {
    statistic_id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
  }

  export type StatisticMinOrderByAggregateInput = {
    statistic_id?: SortOrder
    label?: SortOrder
    value?: SortOrder
    year?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    type_id?: SortOrder
  }

  export type StatisticSumOrderByAggregateInput = {
    statistic_id?: SortOrder
    value?: SortOrder
    year?: SortOrder
    type_id?: SortOrder
  }

  export type NewsCountOrderByAggregateInput = {
    news_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    link?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type NewsAvgOrderByAggregateInput = {
    news_id?: SortOrder
  }

  export type NewsMaxOrderByAggregateInput = {
    news_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    link?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type NewsMinOrderByAggregateInput = {
    news_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    link?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type NewsSumOrderByAggregateInput = {
    news_id?: SortOrder
  }

  export type ValueCountOrderByAggregateInput = {
    value_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ValueAvgOrderByAggregateInput = {
    value_id?: SortOrder
  }

  export type ValueMaxOrderByAggregateInput = {
    value_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ValueMinOrderByAggregateInput = {
    value_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type ValueSumOrderByAggregateInput = {
    value_id?: SortOrder
  }

  export type PositionCountOrderByAggregateInput = {
    position_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PositionAvgOrderByAggregateInput = {
    position_id?: SortOrder
  }

  export type PositionMaxOrderByAggregateInput = {
    position_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PositionMinOrderByAggregateInput = {
    position_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PositionSumOrderByAggregateInput = {
    position_id?: SortOrder
  }

  export type PositionScalarRelationFilter = {
    is?: PositionWhereInput
    isNot?: PositionWhereInput
  }

  export type JobCountOrderByAggregateInput = {
    job_id?: SortOrder
    function?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    position_id?: SortOrder
    user_id?: SortOrder
  }

  export type JobAvgOrderByAggregateInput = {
    job_id?: SortOrder
    position_id?: SortOrder
  }

  export type JobMaxOrderByAggregateInput = {
    job_id?: SortOrder
    function?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    position_id?: SortOrder
    user_id?: SortOrder
  }

  export type JobMinOrderByAggregateInput = {
    job_id?: SortOrder
    function?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    position_id?: SortOrder
    user_id?: SortOrder
  }

  export type JobSumOrderByAggregateInput = {
    job_id?: SortOrder
    position_id?: SortOrder
  }

  export type PathScalarRelationFilter = {
    is?: PathWhereInput
    isNot?: PathWhereInput
  }

  export type StepCountOrderByAggregateInput = {
    step_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    path_id?: SortOrder
  }

  export type StepAvgOrderByAggregateInput = {
    step_id?: SortOrder
    path_id?: SortOrder
  }

  export type StepMaxOrderByAggregateInput = {
    step_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    path_id?: SortOrder
  }

  export type StepMinOrderByAggregateInput = {
    step_id?: SortOrder
    name?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
    path_id?: SortOrder
  }

  export type StepSumOrderByAggregateInput = {
    step_id?: SortOrder
    path_id?: SortOrder
  }

  export type PathCountOrderByAggregateInput = {
    path_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PathAvgOrderByAggregateInput = {
    path_id?: SortOrder
  }

  export type PathMaxOrderByAggregateInput = {
    path_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PathMinOrderByAggregateInput = {
    path_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PathSumOrderByAggregateInput = {
    path_id?: SortOrder
  }

  export type BytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type FileCountOrderByAggregateInput = {
    file_id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type FileAvgOrderByAggregateInput = {
    file_id?: SortOrder
  }

  export type FileMaxOrderByAggregateInput = {
    file_id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type FileMinOrderByAggregateInput = {
    file_id?: SortOrder
    name?: SortOrder
    file?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user_id?: SortOrder
  }

  export type FileSumOrderByAggregateInput = {
    file_id?: SortOrder
  }

  export type BytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type TypeCountOrderByAggregateInput = {
    type_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TypeAvgOrderByAggregateInput = {
    type_id?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    type_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    type_id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TypeSumOrderByAggregateInput = {
    type_id?: SortOrder
  }

  export type PartnerCreateNestedManyWithoutUserInput = {
    create?: XOR<PartnerCreateWithoutUserInput, PartnerUncheckedCreateWithoutUserInput> | PartnerCreateWithoutUserInput[] | PartnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutUserInput | PartnerCreateOrConnectWithoutUserInput[]
    createMany?: PartnerCreateManyUserInputEnvelope
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
  }

  export type TimeCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeCreateWithoutUserInput, TimeUncheckedCreateWithoutUserInput> | TimeCreateWithoutUserInput[] | TimeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeCreateOrConnectWithoutUserInput | TimeCreateOrConnectWithoutUserInput[]
    createMany?: TimeCreateManyUserInputEnvelope
    connect?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
  }

  export type Job_offerCreateNestedManyWithoutUserInput = {
    create?: XOR<Job_offerCreateWithoutUserInput, Job_offerUncheckedCreateWithoutUserInput> | Job_offerCreateWithoutUserInput[] | Job_offerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Job_offerCreateOrConnectWithoutUserInput | Job_offerCreateOrConnectWithoutUserInput[]
    createMany?: Job_offerCreateManyUserInputEnvelope
    connect?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
  }

  export type StructureCreateNestedManyWithoutUserInput = {
    create?: XOR<StructureCreateWithoutUserInput, StructureUncheckedCreateWithoutUserInput> | StructureCreateWithoutUserInput[] | StructureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StructureCreateOrConnectWithoutUserInput | StructureCreateOrConnectWithoutUserInput[]
    createMany?: StructureCreateManyUserInputEnvelope
    connect?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
  }

  export type StatisticCreateNestedManyWithoutUserInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type NewsCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput> | NewsCreateWithoutUserInput[] | NewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutUserInput | NewsCreateOrConnectWithoutUserInput[]
    createMany?: NewsCreateManyUserInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type ValueCreateNestedManyWithoutUserInput = {
    create?: XOR<ValueCreateWithoutUserInput, ValueUncheckedCreateWithoutUserInput> | ValueCreateWithoutUserInput[] | ValueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutUserInput | ValueCreateOrConnectWithoutUserInput[]
    createMany?: ValueCreateManyUserInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type JobCreateNestedManyWithoutUserInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type StepCreateNestedManyWithoutUserInput = {
    create?: XOR<StepCreateWithoutUserInput, StepUncheckedCreateWithoutUserInput> | StepCreateWithoutUserInput[] | StepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepCreateOrConnectWithoutUserInput | StepCreateOrConnectWithoutUserInput[]
    createMany?: StepCreateManyUserInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type FileCreateNestedManyWithoutUserInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type PartnerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PartnerCreateWithoutUserInput, PartnerUncheckedCreateWithoutUserInput> | PartnerCreateWithoutUserInput[] | PartnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutUserInput | PartnerCreateOrConnectWithoutUserInput[]
    createMany?: PartnerCreateManyUserInputEnvelope
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
  }

  export type TimeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TimeCreateWithoutUserInput, TimeUncheckedCreateWithoutUserInput> | TimeCreateWithoutUserInput[] | TimeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeCreateOrConnectWithoutUserInput | TimeCreateOrConnectWithoutUserInput[]
    createMany?: TimeCreateManyUserInputEnvelope
    connect?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
  }

  export type Job_offerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Job_offerCreateWithoutUserInput, Job_offerUncheckedCreateWithoutUserInput> | Job_offerCreateWithoutUserInput[] | Job_offerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Job_offerCreateOrConnectWithoutUserInput | Job_offerCreateOrConnectWithoutUserInput[]
    createMany?: Job_offerCreateManyUserInputEnvelope
    connect?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
  }

  export type StructureUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StructureCreateWithoutUserInput, StructureUncheckedCreateWithoutUserInput> | StructureCreateWithoutUserInput[] | StructureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StructureCreateOrConnectWithoutUserInput | StructureCreateOrConnectWithoutUserInput[]
    createMany?: StructureCreateManyUserInputEnvelope
    connect?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
  }

  export type StatisticUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type NewsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput> | NewsCreateWithoutUserInput[] | NewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutUserInput | NewsCreateOrConnectWithoutUserInput[]
    createMany?: NewsCreateManyUserInputEnvelope
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
  }

  export type ValueUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ValueCreateWithoutUserInput, ValueUncheckedCreateWithoutUserInput> | ValueCreateWithoutUserInput[] | ValueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutUserInput | ValueCreateOrConnectWithoutUserInput[]
    createMany?: ValueCreateManyUserInputEnvelope
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<StepCreateWithoutUserInput, StepUncheckedCreateWithoutUserInput> | StepCreateWithoutUserInput[] | StepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepCreateOrConnectWithoutUserInput | StepCreateOrConnectWithoutUserInput[]
    createMany?: StepCreateManyUserInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type FileUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PartnerUpdateManyWithoutUserNestedInput = {
    create?: XOR<PartnerCreateWithoutUserInput, PartnerUncheckedCreateWithoutUserInput> | PartnerCreateWithoutUserInput[] | PartnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutUserInput | PartnerCreateOrConnectWithoutUserInput[]
    upsert?: PartnerUpsertWithWhereUniqueWithoutUserInput | PartnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PartnerCreateManyUserInputEnvelope
    set?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    disconnect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    delete?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    update?: PartnerUpdateWithWhereUniqueWithoutUserInput | PartnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PartnerUpdateManyWithWhereWithoutUserInput | PartnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
  }

  export type TimeUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeCreateWithoutUserInput, TimeUncheckedCreateWithoutUserInput> | TimeCreateWithoutUserInput[] | TimeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeCreateOrConnectWithoutUserInput | TimeCreateOrConnectWithoutUserInput[]
    upsert?: TimeUpsertWithWhereUniqueWithoutUserInput | TimeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeCreateManyUserInputEnvelope
    set?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
    disconnect?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
    delete?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
    connect?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
    update?: TimeUpdateWithWhereUniqueWithoutUserInput | TimeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeUpdateManyWithWhereWithoutUserInput | TimeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeScalarWhereInput | TimeScalarWhereInput[]
  }

  export type Job_offerUpdateManyWithoutUserNestedInput = {
    create?: XOR<Job_offerCreateWithoutUserInput, Job_offerUncheckedCreateWithoutUserInput> | Job_offerCreateWithoutUserInput[] | Job_offerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Job_offerCreateOrConnectWithoutUserInput | Job_offerCreateOrConnectWithoutUserInput[]
    upsert?: Job_offerUpsertWithWhereUniqueWithoutUserInput | Job_offerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Job_offerCreateManyUserInputEnvelope
    set?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
    disconnect?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
    delete?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
    connect?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
    update?: Job_offerUpdateWithWhereUniqueWithoutUserInput | Job_offerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Job_offerUpdateManyWithWhereWithoutUserInput | Job_offerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Job_offerScalarWhereInput | Job_offerScalarWhereInput[]
  }

  export type StructureUpdateManyWithoutUserNestedInput = {
    create?: XOR<StructureCreateWithoutUserInput, StructureUncheckedCreateWithoutUserInput> | StructureCreateWithoutUserInput[] | StructureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StructureCreateOrConnectWithoutUserInput | StructureCreateOrConnectWithoutUserInput[]
    upsert?: StructureUpsertWithWhereUniqueWithoutUserInput | StructureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StructureCreateManyUserInputEnvelope
    set?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
    disconnect?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
    delete?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
    connect?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
    update?: StructureUpdateWithWhereUniqueWithoutUserInput | StructureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StructureUpdateManyWithWhereWithoutUserInput | StructureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StructureScalarWhereInput | StructureScalarWhereInput[]
  }

  export type StatisticUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutUserInput | StatisticUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutUserInput | StatisticUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutUserInput | StatisticUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type NewsUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput> | NewsCreateWithoutUserInput[] | NewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutUserInput | NewsCreateOrConnectWithoutUserInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutUserInput | NewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsCreateManyUserInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutUserInput | NewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutUserInput | NewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type ValueUpdateManyWithoutUserNestedInput = {
    create?: XOR<ValueCreateWithoutUserInput, ValueUncheckedCreateWithoutUserInput> | ValueCreateWithoutUserInput[] | ValueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutUserInput | ValueCreateOrConnectWithoutUserInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutUserInput | ValueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ValueCreateManyUserInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutUserInput | ValueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutUserInput | ValueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type JobUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutUserInput | JobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutUserInput | JobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobUpdateManyWithWhereWithoutUserInput | JobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type StepUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepCreateWithoutUserInput, StepUncheckedCreateWithoutUserInput> | StepCreateWithoutUserInput[] | StepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepCreateOrConnectWithoutUserInput | StepCreateOrConnectWithoutUserInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutUserInput | StepUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepCreateManyUserInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutUserInput | StepUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepUpdateManyWithWhereWithoutUserInput | StepUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type FileUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUserInput | FileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUserInput | FileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUserInput | FileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type PartnerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PartnerCreateWithoutUserInput, PartnerUncheckedCreateWithoutUserInput> | PartnerCreateWithoutUserInput[] | PartnerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PartnerCreateOrConnectWithoutUserInput | PartnerCreateOrConnectWithoutUserInput[]
    upsert?: PartnerUpsertWithWhereUniqueWithoutUserInput | PartnerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PartnerCreateManyUserInputEnvelope
    set?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    disconnect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    delete?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    connect?: PartnerWhereUniqueInput | PartnerWhereUniqueInput[]
    update?: PartnerUpdateWithWhereUniqueWithoutUserInput | PartnerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PartnerUpdateManyWithWhereWithoutUserInput | PartnerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
  }

  export type TimeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TimeCreateWithoutUserInput, TimeUncheckedCreateWithoutUserInput> | TimeCreateWithoutUserInput[] | TimeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TimeCreateOrConnectWithoutUserInput | TimeCreateOrConnectWithoutUserInput[]
    upsert?: TimeUpsertWithWhereUniqueWithoutUserInput | TimeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TimeCreateManyUserInputEnvelope
    set?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
    disconnect?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
    delete?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
    connect?: TimeWhereUniqueInput | TimeWhereUniqueInput[]
    update?: TimeUpdateWithWhereUniqueWithoutUserInput | TimeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TimeUpdateManyWithWhereWithoutUserInput | TimeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TimeScalarWhereInput | TimeScalarWhereInput[]
  }

  export type Job_offerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Job_offerCreateWithoutUserInput, Job_offerUncheckedCreateWithoutUserInput> | Job_offerCreateWithoutUserInput[] | Job_offerUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Job_offerCreateOrConnectWithoutUserInput | Job_offerCreateOrConnectWithoutUserInput[]
    upsert?: Job_offerUpsertWithWhereUniqueWithoutUserInput | Job_offerUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Job_offerCreateManyUserInputEnvelope
    set?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
    disconnect?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
    delete?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
    connect?: Job_offerWhereUniqueInput | Job_offerWhereUniqueInput[]
    update?: Job_offerUpdateWithWhereUniqueWithoutUserInput | Job_offerUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Job_offerUpdateManyWithWhereWithoutUserInput | Job_offerUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Job_offerScalarWhereInput | Job_offerScalarWhereInput[]
  }

  export type StructureUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StructureCreateWithoutUserInput, StructureUncheckedCreateWithoutUserInput> | StructureCreateWithoutUserInput[] | StructureUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StructureCreateOrConnectWithoutUserInput | StructureCreateOrConnectWithoutUserInput[]
    upsert?: StructureUpsertWithWhereUniqueWithoutUserInput | StructureUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StructureCreateManyUserInputEnvelope
    set?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
    disconnect?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
    delete?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
    connect?: StructureWhereUniqueInput | StructureWhereUniqueInput[]
    update?: StructureUpdateWithWhereUniqueWithoutUserInput | StructureUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StructureUpdateManyWithWhereWithoutUserInput | StructureUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StructureScalarWhereInput | StructureScalarWhereInput[]
  }

  export type StatisticUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput> | StatisticCreateWithoutUserInput[] | StatisticUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutUserInput | StatisticCreateOrConnectWithoutUserInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutUserInput | StatisticUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StatisticCreateManyUserInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutUserInput | StatisticUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutUserInput | StatisticUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type NewsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput> | NewsCreateWithoutUserInput[] | NewsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NewsCreateOrConnectWithoutUserInput | NewsCreateOrConnectWithoutUserInput[]
    upsert?: NewsUpsertWithWhereUniqueWithoutUserInput | NewsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NewsCreateManyUserInputEnvelope
    set?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    disconnect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    delete?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    connect?: NewsWhereUniqueInput | NewsWhereUniqueInput[]
    update?: NewsUpdateWithWhereUniqueWithoutUserInput | NewsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NewsUpdateManyWithWhereWithoutUserInput | NewsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NewsScalarWhereInput | NewsScalarWhereInput[]
  }

  export type ValueUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ValueCreateWithoutUserInput, ValueUncheckedCreateWithoutUserInput> | ValueCreateWithoutUserInput[] | ValueUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ValueCreateOrConnectWithoutUserInput | ValueCreateOrConnectWithoutUserInput[]
    upsert?: ValueUpsertWithWhereUniqueWithoutUserInput | ValueUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ValueCreateManyUserInputEnvelope
    set?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    disconnect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    delete?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    connect?: ValueWhereUniqueInput | ValueWhereUniqueInput[]
    update?: ValueUpdateWithWhereUniqueWithoutUserInput | ValueUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ValueUpdateManyWithWhereWithoutUserInput | ValueUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ValueScalarWhereInput | ValueScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput> | JobCreateWithoutUserInput[] | JobUncheckedCreateWithoutUserInput[]
    connectOrCreate?: JobCreateOrConnectWithoutUserInput | JobCreateOrConnectWithoutUserInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutUserInput | JobUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: JobCreateManyUserInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutUserInput | JobUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: JobUpdateManyWithWhereWithoutUserInput | JobUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<StepCreateWithoutUserInput, StepUncheckedCreateWithoutUserInput> | StepCreateWithoutUserInput[] | StepUncheckedCreateWithoutUserInput[]
    connectOrCreate?: StepCreateOrConnectWithoutUserInput | StepCreateOrConnectWithoutUserInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutUserInput | StepUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: StepCreateManyUserInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutUserInput | StepUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: StepUpdateManyWithWhereWithoutUserInput | StepUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type FileUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput> | FileCreateWithoutUserInput[] | FileUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FileCreateOrConnectWithoutUserInput | FileCreateOrConnectWithoutUserInput[]
    upsert?: FileUpsertWithWhereUniqueWithoutUserInput | FileUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FileCreateManyUserInputEnvelope
    set?: FileWhereUniqueInput | FileWhereUniqueInput[]
    disconnect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    delete?: FileWhereUniqueInput | FileWhereUniqueInput[]
    connect?: FileWhereUniqueInput | FileWhereUniqueInput[]
    update?: FileUpdateWithWhereUniqueWithoutUserInput | FileUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FileUpdateManyWithWhereWithoutUserInput | FileUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FileScalarWhereInput | FileScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPartnersInput = {
    create?: XOR<UserCreateWithoutPartnersInput, UserUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartnersInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPartnersNestedInput = {
    create?: XOR<UserCreateWithoutPartnersInput, UserUncheckedCreateWithoutPartnersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPartnersInput
    upsert?: UserUpsertWithoutPartnersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPartnersInput, UserUpdateWithoutPartnersInput>, UserUncheckedUpdateWithoutPartnersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutTimesInput = {
    create?: XOR<UserCreateWithoutTimesInput, UserUncheckedCreateWithoutTimesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTimesNestedInput = {
    create?: XOR<UserCreateWithoutTimesInput, UserUncheckedCreateWithoutTimesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTimesInput
    upsert?: UserUpsertWithoutTimesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTimesInput, UserUpdateWithoutTimesInput>, UserUncheckedUpdateWithoutTimesInput>
  }

  export type UserCreateNestedOneWithoutJobOffersInput = {
    create?: XOR<UserCreateWithoutJobOffersInput, UserUncheckedCreateWithoutJobOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobOffersInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutJobOffersNestedInput = {
    create?: XOR<UserCreateWithoutJobOffersInput, UserUncheckedCreateWithoutJobOffersInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobOffersInput
    upsert?: UserUpsertWithoutJobOffersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobOffersInput, UserUpdateWithoutJobOffersInput>, UserUncheckedUpdateWithoutJobOffersInput>
  }

  export type UserCreateNestedOneWithoutStructuresInput = {
    create?: XOR<UserCreateWithoutStructuresInput, UserUncheckedCreateWithoutStructuresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStructuresInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStructuresNestedInput = {
    create?: XOR<UserCreateWithoutStructuresInput, UserUncheckedCreateWithoutStructuresInput>
    connectOrCreate?: UserCreateOrConnectWithoutStructuresInput
    upsert?: UserUpsertWithoutStructuresInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStructuresInput, UserUpdateWithoutStructuresInput>, UserUncheckedUpdateWithoutStructuresInput>
  }

  export type UserCreateNestedOneWithoutStatisticsInput = {
    create?: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatisticsInput
    connect?: UserWhereUniqueInput
  }

  export type TypeCreateNestedOneWithoutStatisticsInput = {
    create?: XOR<TypeCreateWithoutStatisticsInput, TypeUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: TypeCreateOrConnectWithoutStatisticsInput
    connect?: TypeWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStatisticsNestedInput = {
    create?: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStatisticsInput
    upsert?: UserUpsertWithoutStatisticsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStatisticsInput, UserUpdateWithoutStatisticsInput>, UserUncheckedUpdateWithoutStatisticsInput>
  }

  export type TypeUpdateOneRequiredWithoutStatisticsNestedInput = {
    create?: XOR<TypeCreateWithoutStatisticsInput, TypeUncheckedCreateWithoutStatisticsInput>
    connectOrCreate?: TypeCreateOrConnectWithoutStatisticsInput
    upsert?: TypeUpsertWithoutStatisticsInput
    connect?: TypeWhereUniqueInput
    update?: XOR<XOR<TypeUpdateToOneWithWhereWithoutStatisticsInput, TypeUpdateWithoutStatisticsInput>, TypeUncheckedUpdateWithoutStatisticsInput>
  }

  export type UserCreateNestedOneWithoutNewsInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNewsNestedInput = {
    create?: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsInput
    upsert?: UserUpsertWithoutNewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsInput, UserUpdateWithoutNewsInput>, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserCreateNestedOneWithoutValuesInput = {
    create?: XOR<UserCreateWithoutValuesInput, UserUncheckedCreateWithoutValuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutValuesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutValuesNestedInput = {
    create?: XOR<UserCreateWithoutValuesInput, UserUncheckedCreateWithoutValuesInput>
    connectOrCreate?: UserCreateOrConnectWithoutValuesInput
    upsert?: UserUpsertWithoutValuesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValuesInput, UserUpdateWithoutValuesInput>, UserUncheckedUpdateWithoutValuesInput>
  }

  export type JobCreateNestedManyWithoutPositionInput = {
    create?: XOR<JobCreateWithoutPositionInput, JobUncheckedCreateWithoutPositionInput> | JobCreateWithoutPositionInput[] | JobUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: JobCreateOrConnectWithoutPositionInput | JobCreateOrConnectWithoutPositionInput[]
    createMany?: JobCreateManyPositionInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUncheckedCreateNestedManyWithoutPositionInput = {
    create?: XOR<JobCreateWithoutPositionInput, JobUncheckedCreateWithoutPositionInput> | JobCreateWithoutPositionInput[] | JobUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: JobCreateOrConnectWithoutPositionInput | JobCreateOrConnectWithoutPositionInput[]
    createMany?: JobCreateManyPositionInputEnvelope
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
  }

  export type JobUpdateManyWithoutPositionNestedInput = {
    create?: XOR<JobCreateWithoutPositionInput, JobUncheckedCreateWithoutPositionInput> | JobCreateWithoutPositionInput[] | JobUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: JobCreateOrConnectWithoutPositionInput | JobCreateOrConnectWithoutPositionInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutPositionInput | JobUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: JobCreateManyPositionInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutPositionInput | JobUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: JobUpdateManyWithWhereWithoutPositionInput | JobUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type JobUncheckedUpdateManyWithoutPositionNestedInput = {
    create?: XOR<JobCreateWithoutPositionInput, JobUncheckedCreateWithoutPositionInput> | JobCreateWithoutPositionInput[] | JobUncheckedCreateWithoutPositionInput[]
    connectOrCreate?: JobCreateOrConnectWithoutPositionInput | JobCreateOrConnectWithoutPositionInput[]
    upsert?: JobUpsertWithWhereUniqueWithoutPositionInput | JobUpsertWithWhereUniqueWithoutPositionInput[]
    createMany?: JobCreateManyPositionInputEnvelope
    set?: JobWhereUniqueInput | JobWhereUniqueInput[]
    disconnect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    delete?: JobWhereUniqueInput | JobWhereUniqueInput[]
    connect?: JobWhereUniqueInput | JobWhereUniqueInput[]
    update?: JobUpdateWithWhereUniqueWithoutPositionInput | JobUpdateWithWhereUniqueWithoutPositionInput[]
    updateMany?: JobUpdateManyWithWhereWithoutPositionInput | JobUpdateManyWithWhereWithoutPositionInput[]
    deleteMany?: JobScalarWhereInput | JobScalarWhereInput[]
  }

  export type PositionCreateNestedOneWithoutJobsInput = {
    create?: XOR<PositionCreateWithoutJobsInput, PositionUncheckedCreateWithoutJobsInput>
    connectOrCreate?: PositionCreateOrConnectWithoutJobsInput
    connect?: PositionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutJobsInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    connect?: UserWhereUniqueInput
  }

  export type PositionUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<PositionCreateWithoutJobsInput, PositionUncheckedCreateWithoutJobsInput>
    connectOrCreate?: PositionCreateOrConnectWithoutJobsInput
    upsert?: PositionUpsertWithoutJobsInput
    connect?: PositionWhereUniqueInput
    update?: XOR<XOR<PositionUpdateToOneWithWhereWithoutJobsInput, PositionUpdateWithoutJobsInput>, PositionUncheckedUpdateWithoutJobsInput>
  }

  export type UserUpdateOneRequiredWithoutJobsNestedInput = {
    create?: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    connectOrCreate?: UserCreateOrConnectWithoutJobsInput
    upsert?: UserUpsertWithoutJobsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutJobsInput, UserUpdateWithoutJobsInput>, UserUncheckedUpdateWithoutJobsInput>
  }

  export type UserCreateNestedOneWithoutStepsInput = {
    create?: XOR<UserCreateWithoutStepsInput, UserUncheckedCreateWithoutStepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepsInput
    connect?: UserWhereUniqueInput
  }

  export type PathCreateNestedOneWithoutStepsInput = {
    create?: XOR<PathCreateWithoutStepsInput, PathUncheckedCreateWithoutStepsInput>
    connectOrCreate?: PathCreateOrConnectWithoutStepsInput
    connect?: PathWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<UserCreateWithoutStepsInput, UserUncheckedCreateWithoutStepsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStepsInput
    upsert?: UserUpsertWithoutStepsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStepsInput, UserUpdateWithoutStepsInput>, UserUncheckedUpdateWithoutStepsInput>
  }

  export type PathUpdateOneRequiredWithoutStepsNestedInput = {
    create?: XOR<PathCreateWithoutStepsInput, PathUncheckedCreateWithoutStepsInput>
    connectOrCreate?: PathCreateOrConnectWithoutStepsInput
    upsert?: PathUpsertWithoutStepsInput
    connect?: PathWhereUniqueInput
    update?: XOR<XOR<PathUpdateToOneWithWhereWithoutStepsInput, PathUpdateWithoutStepsInput>, PathUncheckedUpdateWithoutStepsInput>
  }

  export type StepCreateNestedManyWithoutPathInput = {
    create?: XOR<StepCreateWithoutPathInput, StepUncheckedCreateWithoutPathInput> | StepCreateWithoutPathInput[] | StepUncheckedCreateWithoutPathInput[]
    connectOrCreate?: StepCreateOrConnectWithoutPathInput | StepCreateOrConnectWithoutPathInput[]
    createMany?: StepCreateManyPathInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type StepUncheckedCreateNestedManyWithoutPathInput = {
    create?: XOR<StepCreateWithoutPathInput, StepUncheckedCreateWithoutPathInput> | StepCreateWithoutPathInput[] | StepUncheckedCreateWithoutPathInput[]
    connectOrCreate?: StepCreateOrConnectWithoutPathInput | StepCreateOrConnectWithoutPathInput[]
    createMany?: StepCreateManyPathInputEnvelope
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
  }

  export type StepUpdateManyWithoutPathNestedInput = {
    create?: XOR<StepCreateWithoutPathInput, StepUncheckedCreateWithoutPathInput> | StepCreateWithoutPathInput[] | StepUncheckedCreateWithoutPathInput[]
    connectOrCreate?: StepCreateOrConnectWithoutPathInput | StepCreateOrConnectWithoutPathInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutPathInput | StepUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: StepCreateManyPathInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutPathInput | StepUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: StepUpdateManyWithWhereWithoutPathInput | StepUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type StepUncheckedUpdateManyWithoutPathNestedInput = {
    create?: XOR<StepCreateWithoutPathInput, StepUncheckedCreateWithoutPathInput> | StepCreateWithoutPathInput[] | StepUncheckedCreateWithoutPathInput[]
    connectOrCreate?: StepCreateOrConnectWithoutPathInput | StepCreateOrConnectWithoutPathInput[]
    upsert?: StepUpsertWithWhereUniqueWithoutPathInput | StepUpsertWithWhereUniqueWithoutPathInput[]
    createMany?: StepCreateManyPathInputEnvelope
    set?: StepWhereUniqueInput | StepWhereUniqueInput[]
    disconnect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    delete?: StepWhereUniqueInput | StepWhereUniqueInput[]
    connect?: StepWhereUniqueInput | StepWhereUniqueInput[]
    update?: StepUpdateWithWhereUniqueWithoutPathInput | StepUpdateWithWhereUniqueWithoutPathInput[]
    updateMany?: StepUpdateManyWithWhereWithoutPathInput | StepUpdateManyWithWhereWithoutPathInput[]
    deleteMany?: StepScalarWhereInput | StepScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type BytesFieldUpdateOperationsInput = {
    set?: Uint8Array
  }

  export type UserUpdateOneRequiredWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type StatisticCreateNestedManyWithoutTypeInput = {
    create?: XOR<StatisticCreateWithoutTypeInput, StatisticUncheckedCreateWithoutTypeInput> | StatisticCreateWithoutTypeInput[] | StatisticUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutTypeInput | StatisticCreateOrConnectWithoutTypeInput[]
    createMany?: StatisticCreateManyTypeInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type StatisticUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<StatisticCreateWithoutTypeInput, StatisticUncheckedCreateWithoutTypeInput> | StatisticCreateWithoutTypeInput[] | StatisticUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutTypeInput | StatisticCreateOrConnectWithoutTypeInput[]
    createMany?: StatisticCreateManyTypeInputEnvelope
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
  }

  export type StatisticUpdateManyWithoutTypeNestedInput = {
    create?: XOR<StatisticCreateWithoutTypeInput, StatisticUncheckedCreateWithoutTypeInput> | StatisticCreateWithoutTypeInput[] | StatisticUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutTypeInput | StatisticCreateOrConnectWithoutTypeInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutTypeInput | StatisticUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: StatisticCreateManyTypeInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutTypeInput | StatisticUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutTypeInput | StatisticUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type StatisticUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<StatisticCreateWithoutTypeInput, StatisticUncheckedCreateWithoutTypeInput> | StatisticCreateWithoutTypeInput[] | StatisticUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: StatisticCreateOrConnectWithoutTypeInput | StatisticCreateOrConnectWithoutTypeInput[]
    upsert?: StatisticUpsertWithWhereUniqueWithoutTypeInput | StatisticUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: StatisticCreateManyTypeInputEnvelope
    set?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    disconnect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    delete?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    connect?: StatisticWhereUniqueInput | StatisticWhereUniqueInput[]
    update?: StatisticUpdateWithWhereUniqueWithoutTypeInput | StatisticUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: StatisticUpdateManyWithWhereWithoutTypeInput | StatisticUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBytesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesFilter<$PrismaModel> | Uint8Array
  }

  export type NestedBytesWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Uint8Array | BytesFieldRefInput<$PrismaModel>
    in?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    notIn?: Uint8Array[] | ListBytesFieldRefInput<$PrismaModel>
    not?: NestedBytesWithAggregatesFilter<$PrismaModel> | Uint8Array
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBytesFilter<$PrismaModel>
    _max?: NestedBytesFilter<$PrismaModel>
  }

  export type PartnerCreateWithoutUserInput = {
    name: string
    image_url: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type PartnerUncheckedCreateWithoutUserInput = {
    parteners_id?: number
    name: string
    image_url: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type PartnerCreateOrConnectWithoutUserInput = {
    where: PartnerWhereUniqueInput
    create: XOR<PartnerCreateWithoutUserInput, PartnerUncheckedCreateWithoutUserInput>
  }

  export type PartnerCreateManyUserInputEnvelope = {
    data: PartnerCreateManyUserInput | PartnerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TimeCreateWithoutUserInput = {
    year: number
    event_description: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type TimeUncheckedCreateWithoutUserInput = {
    time_id?: number
    year: number
    event_description: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type TimeCreateOrConnectWithoutUserInput = {
    where: TimeWhereUniqueInput
    create: XOR<TimeCreateWithoutUserInput, TimeUncheckedCreateWithoutUserInput>
  }

  export type TimeCreateManyUserInputEnvelope = {
    data: TimeCreateManyUserInput | TimeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Job_offerCreateWithoutUserInput = {
    name: string
    job_type: string
    city?: string | null
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type Job_offerUncheckedCreateWithoutUserInput = {
    job_offer_id?: number
    name: string
    job_type: string
    city?: string | null
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type Job_offerCreateOrConnectWithoutUserInput = {
    where: Job_offerWhereUniqueInput
    create: XOR<Job_offerCreateWithoutUserInput, Job_offerUncheckedCreateWithoutUserInput>
  }

  export type Job_offerCreateManyUserInputEnvelope = {
    data: Job_offerCreateManyUserInput | Job_offerCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StructureCreateWithoutUserInput = {
    name: string
    image_url?: string | null
    description: string
    address?: string | null
    phone_number?: string | null
    missions?: string | null
    link?: string | null
    schedule?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type StructureUncheckedCreateWithoutUserInput = {
    structure_id?: number
    name: string
    image_url?: string | null
    description: string
    address?: string | null
    phone_number?: string | null
    missions?: string | null
    link?: string | null
    schedule?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type StructureCreateOrConnectWithoutUserInput = {
    where: StructureWhereUniqueInput
    create: XOR<StructureCreateWithoutUserInput, StructureUncheckedCreateWithoutUserInput>
  }

  export type StructureCreateManyUserInputEnvelope = {
    data: StructureCreateManyUserInput | StructureCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StatisticCreateWithoutUserInput = {
    label: string
    value: number
    year: number
    created_at: Date | string
    updated_at: Date | string
    type: TypeCreateNestedOneWithoutStatisticsInput
  }

  export type StatisticUncheckedCreateWithoutUserInput = {
    statistic_id?: number
    label: string
    value: number
    year: number
    created_at: Date | string
    updated_at: Date | string
    type_id: number
  }

  export type StatisticCreateOrConnectWithoutUserInput = {
    where: StatisticWhereUniqueInput
    create: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
  }

  export type StatisticCreateManyUserInputEnvelope = {
    data: StatisticCreateManyUserInput | StatisticCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NewsCreateWithoutUserInput = {
    name: string
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type NewsUncheckedCreateWithoutUserInput = {
    news_id?: number
    name: string
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type NewsCreateOrConnectWithoutUserInput = {
    where: NewsWhereUniqueInput
    create: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput>
  }

  export type NewsCreateManyUserInputEnvelope = {
    data: NewsCreateManyUserInput | NewsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ValueCreateWithoutUserInput = {
    name: string
    image_url?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type ValueUncheckedCreateWithoutUserInput = {
    value_id?: number
    name: string
    image_url?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type ValueCreateOrConnectWithoutUserInput = {
    where: ValueWhereUniqueInput
    create: XOR<ValueCreateWithoutUserInput, ValueUncheckedCreateWithoutUserInput>
  }

  export type ValueCreateManyUserInputEnvelope = {
    data: ValueCreateManyUserInput | ValueCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type JobCreateWithoutUserInput = {
    function: string
    created_at: Date | string
    updated_at: Date | string
    position: PositionCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutUserInput = {
    job_id?: number
    function: string
    created_at: Date | string
    updated_at: Date | string
    position_id: number
  }

  export type JobCreateOrConnectWithoutUserInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput>
  }

  export type JobCreateManyUserInputEnvelope = {
    data: JobCreateManyUserInput | JobCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type StepCreateWithoutUserInput = {
    name: string
    image_url?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    path: PathCreateNestedOneWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutUserInput = {
    step_id?: number
    name: string
    image_url?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    path_id: number
  }

  export type StepCreateOrConnectWithoutUserInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutUserInput, StepUncheckedCreateWithoutUserInput>
  }

  export type StepCreateManyUserInputEnvelope = {
    data: StepCreateManyUserInput | StepCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutUserInput = {
    name: string
    file: Uint8Array
    created_at: Date | string
    updated_at: Date | string
  }

  export type FileUncheckedCreateWithoutUserInput = {
    file_id?: number
    name: string
    file: Uint8Array
    created_at: Date | string
    updated_at: Date | string
  }

  export type FileCreateOrConnectWithoutUserInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileCreateManyUserInputEnvelope = {
    data: FileCreateManyUserInput | FileCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PartnerUpsertWithWhereUniqueWithoutUserInput = {
    where: PartnerWhereUniqueInput
    update: XOR<PartnerUpdateWithoutUserInput, PartnerUncheckedUpdateWithoutUserInput>
    create: XOR<PartnerCreateWithoutUserInput, PartnerUncheckedCreateWithoutUserInput>
  }

  export type PartnerUpdateWithWhereUniqueWithoutUserInput = {
    where: PartnerWhereUniqueInput
    data: XOR<PartnerUpdateWithoutUserInput, PartnerUncheckedUpdateWithoutUserInput>
  }

  export type PartnerUpdateManyWithWhereWithoutUserInput = {
    where: PartnerScalarWhereInput
    data: XOR<PartnerUpdateManyMutationInput, PartnerUncheckedUpdateManyWithoutUserInput>
  }

  export type PartnerScalarWhereInput = {
    AND?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
    OR?: PartnerScalarWhereInput[]
    NOT?: PartnerScalarWhereInput | PartnerScalarWhereInput[]
    parteners_id?: IntFilter<"Partner"> | number
    name?: StringFilter<"Partner"> | string
    image_url?: StringFilter<"Partner"> | string
    created_at?: DateTimeFilter<"Partner"> | Date | string
    updated_at?: DateTimeFilter<"Partner"> | Date | string
    user_id?: StringFilter<"Partner"> | string
  }

  export type TimeUpsertWithWhereUniqueWithoutUserInput = {
    where: TimeWhereUniqueInput
    update: XOR<TimeUpdateWithoutUserInput, TimeUncheckedUpdateWithoutUserInput>
    create: XOR<TimeCreateWithoutUserInput, TimeUncheckedCreateWithoutUserInput>
  }

  export type TimeUpdateWithWhereUniqueWithoutUserInput = {
    where: TimeWhereUniqueInput
    data: XOR<TimeUpdateWithoutUserInput, TimeUncheckedUpdateWithoutUserInput>
  }

  export type TimeUpdateManyWithWhereWithoutUserInput = {
    where: TimeScalarWhereInput
    data: XOR<TimeUpdateManyMutationInput, TimeUncheckedUpdateManyWithoutUserInput>
  }

  export type TimeScalarWhereInput = {
    AND?: TimeScalarWhereInput | TimeScalarWhereInput[]
    OR?: TimeScalarWhereInput[]
    NOT?: TimeScalarWhereInput | TimeScalarWhereInput[]
    time_id?: IntFilter<"Time"> | number
    year?: IntFilter<"Time"> | number
    event_description?: StringFilter<"Time"> | string
    created_at?: DateTimeFilter<"Time"> | Date | string
    updated_at?: DateTimeFilter<"Time"> | Date | string
    user_id?: StringFilter<"Time"> | string
  }

  export type Job_offerUpsertWithWhereUniqueWithoutUserInput = {
    where: Job_offerWhereUniqueInput
    update: XOR<Job_offerUpdateWithoutUserInput, Job_offerUncheckedUpdateWithoutUserInput>
    create: XOR<Job_offerCreateWithoutUserInput, Job_offerUncheckedCreateWithoutUserInput>
  }

  export type Job_offerUpdateWithWhereUniqueWithoutUserInput = {
    where: Job_offerWhereUniqueInput
    data: XOR<Job_offerUpdateWithoutUserInput, Job_offerUncheckedUpdateWithoutUserInput>
  }

  export type Job_offerUpdateManyWithWhereWithoutUserInput = {
    where: Job_offerScalarWhereInput
    data: XOR<Job_offerUpdateManyMutationInput, Job_offerUncheckedUpdateManyWithoutUserInput>
  }

  export type Job_offerScalarWhereInput = {
    AND?: Job_offerScalarWhereInput | Job_offerScalarWhereInput[]
    OR?: Job_offerScalarWhereInput[]
    NOT?: Job_offerScalarWhereInput | Job_offerScalarWhereInput[]
    job_offer_id?: IntFilter<"Job_offer"> | number
    name?: StringFilter<"Job_offer"> | string
    job_type?: StringFilter<"Job_offer"> | string
    city?: StringNullableFilter<"Job_offer"> | string | null
    image_url?: StringNullableFilter<"Job_offer"> | string | null
    link?: StringNullableFilter<"Job_offer"> | string | null
    description?: StringFilter<"Job_offer"> | string
    created_at?: DateTimeFilter<"Job_offer"> | Date | string
    updated_at?: DateTimeFilter<"Job_offer"> | Date | string
    user_id?: StringFilter<"Job_offer"> | string
  }

  export type StructureUpsertWithWhereUniqueWithoutUserInput = {
    where: StructureWhereUniqueInput
    update: XOR<StructureUpdateWithoutUserInput, StructureUncheckedUpdateWithoutUserInput>
    create: XOR<StructureCreateWithoutUserInput, StructureUncheckedCreateWithoutUserInput>
  }

  export type StructureUpdateWithWhereUniqueWithoutUserInput = {
    where: StructureWhereUniqueInput
    data: XOR<StructureUpdateWithoutUserInput, StructureUncheckedUpdateWithoutUserInput>
  }

  export type StructureUpdateManyWithWhereWithoutUserInput = {
    where: StructureScalarWhereInput
    data: XOR<StructureUpdateManyMutationInput, StructureUncheckedUpdateManyWithoutUserInput>
  }

  export type StructureScalarWhereInput = {
    AND?: StructureScalarWhereInput | StructureScalarWhereInput[]
    OR?: StructureScalarWhereInput[]
    NOT?: StructureScalarWhereInput | StructureScalarWhereInput[]
    structure_id?: IntFilter<"Structure"> | number
    name?: StringFilter<"Structure"> | string
    image_url?: StringNullableFilter<"Structure"> | string | null
    description?: StringFilter<"Structure"> | string
    address?: StringNullableFilter<"Structure"> | string | null
    phone_number?: StringNullableFilter<"Structure"> | string | null
    missions?: StringNullableFilter<"Structure"> | string | null
    link?: StringNullableFilter<"Structure"> | string | null
    schedule?: StringNullableFilter<"Structure"> | string | null
    created_at?: DateTimeFilter<"Structure"> | Date | string
    updated_at?: DateTimeFilter<"Structure"> | Date | string
    user_id?: StringFilter<"Structure"> | string
  }

  export type StatisticUpsertWithWhereUniqueWithoutUserInput = {
    where: StatisticWhereUniqueInput
    update: XOR<StatisticUpdateWithoutUserInput, StatisticUncheckedUpdateWithoutUserInput>
    create: XOR<StatisticCreateWithoutUserInput, StatisticUncheckedCreateWithoutUserInput>
  }

  export type StatisticUpdateWithWhereUniqueWithoutUserInput = {
    where: StatisticWhereUniqueInput
    data: XOR<StatisticUpdateWithoutUserInput, StatisticUncheckedUpdateWithoutUserInput>
  }

  export type StatisticUpdateManyWithWhereWithoutUserInput = {
    where: StatisticScalarWhereInput
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyWithoutUserInput>
  }

  export type StatisticScalarWhereInput = {
    AND?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
    OR?: StatisticScalarWhereInput[]
    NOT?: StatisticScalarWhereInput | StatisticScalarWhereInput[]
    statistic_id?: IntFilter<"Statistic"> | number
    label?: StringFilter<"Statistic"> | string
    value?: IntFilter<"Statistic"> | number
    year?: IntFilter<"Statistic"> | number
    created_at?: DateTimeFilter<"Statistic"> | Date | string
    updated_at?: DateTimeFilter<"Statistic"> | Date | string
    user_id?: StringFilter<"Statistic"> | string
    type_id?: IntFilter<"Statistic"> | number
  }

  export type NewsUpsertWithWhereUniqueWithoutUserInput = {
    where: NewsWhereUniqueInput
    update: XOR<NewsUpdateWithoutUserInput, NewsUncheckedUpdateWithoutUserInput>
    create: XOR<NewsCreateWithoutUserInput, NewsUncheckedCreateWithoutUserInput>
  }

  export type NewsUpdateWithWhereUniqueWithoutUserInput = {
    where: NewsWhereUniqueInput
    data: XOR<NewsUpdateWithoutUserInput, NewsUncheckedUpdateWithoutUserInput>
  }

  export type NewsUpdateManyWithWhereWithoutUserInput = {
    where: NewsScalarWhereInput
    data: XOR<NewsUpdateManyMutationInput, NewsUncheckedUpdateManyWithoutUserInput>
  }

  export type NewsScalarWhereInput = {
    AND?: NewsScalarWhereInput | NewsScalarWhereInput[]
    OR?: NewsScalarWhereInput[]
    NOT?: NewsScalarWhereInput | NewsScalarWhereInput[]
    news_id?: IntFilter<"News"> | number
    name?: StringFilter<"News"> | string
    image_url?: StringNullableFilter<"News"> | string | null
    link?: StringNullableFilter<"News"> | string | null
    description?: StringFilter<"News"> | string
    created_at?: DateTimeFilter<"News"> | Date | string
    updated_at?: DateTimeFilter<"News"> | Date | string
    user_id?: StringFilter<"News"> | string
  }

  export type ValueUpsertWithWhereUniqueWithoutUserInput = {
    where: ValueWhereUniqueInput
    update: XOR<ValueUpdateWithoutUserInput, ValueUncheckedUpdateWithoutUserInput>
    create: XOR<ValueCreateWithoutUserInput, ValueUncheckedCreateWithoutUserInput>
  }

  export type ValueUpdateWithWhereUniqueWithoutUserInput = {
    where: ValueWhereUniqueInput
    data: XOR<ValueUpdateWithoutUserInput, ValueUncheckedUpdateWithoutUserInput>
  }

  export type ValueUpdateManyWithWhereWithoutUserInput = {
    where: ValueScalarWhereInput
    data: XOR<ValueUpdateManyMutationInput, ValueUncheckedUpdateManyWithoutUserInput>
  }

  export type ValueScalarWhereInput = {
    AND?: ValueScalarWhereInput | ValueScalarWhereInput[]
    OR?: ValueScalarWhereInput[]
    NOT?: ValueScalarWhereInput | ValueScalarWhereInput[]
    value_id?: IntFilter<"Value"> | number
    name?: StringFilter<"Value"> | string
    image_url?: StringNullableFilter<"Value"> | string | null
    created_at?: DateTimeFilter<"Value"> | Date | string
    updated_at?: DateTimeFilter<"Value"> | Date | string
    user_id?: StringFilter<"Value"> | string
  }

  export type JobUpsertWithWhereUniqueWithoutUserInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutUserInput, JobUncheckedUpdateWithoutUserInput>
    create: XOR<JobCreateWithoutUserInput, JobUncheckedCreateWithoutUserInput>
  }

  export type JobUpdateWithWhereUniqueWithoutUserInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutUserInput, JobUncheckedUpdateWithoutUserInput>
  }

  export type JobUpdateManyWithWhereWithoutUserInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutUserInput>
  }

  export type JobScalarWhereInput = {
    AND?: JobScalarWhereInput | JobScalarWhereInput[]
    OR?: JobScalarWhereInput[]
    NOT?: JobScalarWhereInput | JobScalarWhereInput[]
    job_id?: IntFilter<"Job"> | number
    function?: StringFilter<"Job"> | string
    created_at?: DateTimeFilter<"Job"> | Date | string
    updated_at?: DateTimeFilter<"Job"> | Date | string
    position_id?: IntFilter<"Job"> | number
    user_id?: StringFilter<"Job"> | string
  }

  export type StepUpsertWithWhereUniqueWithoutUserInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutUserInput, StepUncheckedUpdateWithoutUserInput>
    create: XOR<StepCreateWithoutUserInput, StepUncheckedCreateWithoutUserInput>
  }

  export type StepUpdateWithWhereUniqueWithoutUserInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutUserInput, StepUncheckedUpdateWithoutUserInput>
  }

  export type StepUpdateManyWithWhereWithoutUserInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutUserInput>
  }

  export type StepScalarWhereInput = {
    AND?: StepScalarWhereInput | StepScalarWhereInput[]
    OR?: StepScalarWhereInput[]
    NOT?: StepScalarWhereInput | StepScalarWhereInput[]
    step_id?: IntFilter<"Step"> | number
    name?: StringFilter<"Step"> | string
    image_url?: StringNullableFilter<"Step"> | string | null
    description?: StringFilter<"Step"> | string
    created_at?: DateTimeFilter<"Step"> | Date | string
    updated_at?: DateTimeFilter<"Step"> | Date | string
    user_id?: StringFilter<"Step"> | string
    path_id?: IntFilter<"Step"> | number
  }

  export type FileUpsertWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
    create: XOR<FileCreateWithoutUserInput, FileUncheckedCreateWithoutUserInput>
  }

  export type FileUpdateWithWhereUniqueWithoutUserInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutUserInput, FileUncheckedUpdateWithoutUserInput>
  }

  export type FileUpdateManyWithWhereWithoutUserInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutUserInput>
  }

  export type FileScalarWhereInput = {
    AND?: FileScalarWhereInput | FileScalarWhereInput[]
    OR?: FileScalarWhereInput[]
    NOT?: FileScalarWhereInput | FileScalarWhereInput[]
    file_id?: IntFilter<"File"> | number
    name?: StringFilter<"File"> | string
    file?: BytesFilter<"File"> | Uint8Array
    created_at?: DateTimeFilter<"File"> | Date | string
    updated_at?: DateTimeFilter<"File"> | Date | string
    user_id?: StringFilter<"File"> | string
  }

  export type UserCreateWithoutPartnersInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    times?: TimeCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPartnersInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPartnersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPartnersInput, UserUncheckedCreateWithoutPartnersInput>
  }

  export type UserUpsertWithoutPartnersInput = {
    update: XOR<UserUpdateWithoutPartnersInput, UserUncheckedUpdateWithoutPartnersInput>
    create: XOR<UserCreateWithoutPartnersInput, UserUncheckedCreateWithoutPartnersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPartnersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPartnersInput, UserUncheckedUpdateWithoutPartnersInput>
  }

  export type UserUpdateWithoutPartnersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    times?: TimeUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPartnersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTimesInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTimesInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTimesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTimesInput, UserUncheckedCreateWithoutTimesInput>
  }

  export type UserUpsertWithoutTimesInput = {
    update: XOR<UserUpdateWithoutTimesInput, UserUncheckedUpdateWithoutTimesInput>
    create: XOR<UserCreateWithoutTimesInput, UserUncheckedCreateWithoutTimesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTimesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTimesInput, UserUncheckedUpdateWithoutTimesInput>
  }

  export type UserUpdateWithoutTimesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTimesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutJobOffersInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    times?: TimeCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobOffersInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobOffersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobOffersInput, UserUncheckedCreateWithoutJobOffersInput>
  }

  export type UserUpsertWithoutJobOffersInput = {
    update: XOR<UserUpdateWithoutJobOffersInput, UserUncheckedUpdateWithoutJobOffersInput>
    create: XOR<UserCreateWithoutJobOffersInput, UserUncheckedCreateWithoutJobOffersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobOffersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobOffersInput, UserUncheckedUpdateWithoutJobOffersInput>
  }

  export type UserUpdateWithoutJobOffersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    times?: TimeUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobOffersInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStructuresInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    times?: TimeCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStructuresInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStructuresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStructuresInput, UserUncheckedCreateWithoutStructuresInput>
  }

  export type UserUpsertWithoutStructuresInput = {
    update: XOR<UserUpdateWithoutStructuresInput, UserUncheckedUpdateWithoutStructuresInput>
    create: XOR<UserCreateWithoutStructuresInput, UserUncheckedCreateWithoutStructuresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStructuresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStructuresInput, UserUncheckedUpdateWithoutStructuresInput>
  }

  export type UserUpdateWithoutStructuresInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    times?: TimeUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStructuresInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStatisticsInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    times?: TimeCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStatisticsInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStatisticsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
  }

  export type TypeCreateWithoutStatisticsInput = {
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type TypeUncheckedCreateWithoutStatisticsInput = {
    type_id?: number
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type TypeCreateOrConnectWithoutStatisticsInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutStatisticsInput, TypeUncheckedCreateWithoutStatisticsInput>
  }

  export type UserUpsertWithoutStatisticsInput = {
    update: XOR<UserUpdateWithoutStatisticsInput, UserUncheckedUpdateWithoutStatisticsInput>
    create: XOR<UserCreateWithoutStatisticsInput, UserUncheckedCreateWithoutStatisticsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStatisticsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStatisticsInput, UserUncheckedUpdateWithoutStatisticsInput>
  }

  export type UserUpdateWithoutStatisticsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    times?: TimeUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStatisticsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TypeUpsertWithoutStatisticsInput = {
    update: XOR<TypeUpdateWithoutStatisticsInput, TypeUncheckedUpdateWithoutStatisticsInput>
    create: XOR<TypeCreateWithoutStatisticsInput, TypeUncheckedCreateWithoutStatisticsInput>
    where?: TypeWhereInput
  }

  export type TypeUpdateToOneWithWhereWithoutStatisticsInput = {
    where?: TypeWhereInput
    data: XOR<TypeUpdateWithoutStatisticsInput, TypeUncheckedUpdateWithoutStatisticsInput>
  }

  export type TypeUpdateWithoutStatisticsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TypeUncheckedUpdateWithoutStatisticsInput = {
    type_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutNewsInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    times?: TimeCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
  }

  export type UserUpsertWithoutNewsInput = {
    update: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
    create: XOR<UserCreateWithoutNewsInput, UserUncheckedCreateWithoutNewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsInput, UserUncheckedUpdateWithoutNewsInput>
  }

  export type UserUpdateWithoutNewsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    times?: TimeUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutValuesInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    times?: TimeCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutValuesInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutValuesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValuesInput, UserUncheckedCreateWithoutValuesInput>
  }

  export type UserUpsertWithoutValuesInput = {
    update: XOR<UserUpdateWithoutValuesInput, UserUncheckedUpdateWithoutValuesInput>
    create: XOR<UserCreateWithoutValuesInput, UserUncheckedCreateWithoutValuesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValuesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValuesInput, UserUncheckedUpdateWithoutValuesInput>
  }

  export type UserUpdateWithoutValuesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    times?: TimeUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutValuesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JobCreateWithoutPositionInput = {
    function: string
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutJobsInput
  }

  export type JobUncheckedCreateWithoutPositionInput = {
    job_id?: number
    function: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type JobCreateOrConnectWithoutPositionInput = {
    where: JobWhereUniqueInput
    create: XOR<JobCreateWithoutPositionInput, JobUncheckedCreateWithoutPositionInput>
  }

  export type JobCreateManyPositionInputEnvelope = {
    data: JobCreateManyPositionInput | JobCreateManyPositionInput[]
    skipDuplicates?: boolean
  }

  export type JobUpsertWithWhereUniqueWithoutPositionInput = {
    where: JobWhereUniqueInput
    update: XOR<JobUpdateWithoutPositionInput, JobUncheckedUpdateWithoutPositionInput>
    create: XOR<JobCreateWithoutPositionInput, JobUncheckedCreateWithoutPositionInput>
  }

  export type JobUpdateWithWhereUniqueWithoutPositionInput = {
    where: JobWhereUniqueInput
    data: XOR<JobUpdateWithoutPositionInput, JobUncheckedUpdateWithoutPositionInput>
  }

  export type JobUpdateManyWithWhereWithoutPositionInput = {
    where: JobScalarWhereInput
    data: XOR<JobUpdateManyMutationInput, JobUncheckedUpdateManyWithoutPositionInput>
  }

  export type PositionCreateWithoutJobsInput = {
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type PositionUncheckedCreateWithoutJobsInput = {
    position_id?: number
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type PositionCreateOrConnectWithoutJobsInput = {
    where: PositionWhereUniqueInput
    create: XOR<PositionCreateWithoutJobsInput, PositionUncheckedCreateWithoutJobsInput>
  }

  export type UserCreateWithoutJobsInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    times?: TimeCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutJobsInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutJobsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
  }

  export type PositionUpsertWithoutJobsInput = {
    update: XOR<PositionUpdateWithoutJobsInput, PositionUncheckedUpdateWithoutJobsInput>
    create: XOR<PositionCreateWithoutJobsInput, PositionUncheckedCreateWithoutJobsInput>
    where?: PositionWhereInput
  }

  export type PositionUpdateToOneWithWhereWithoutJobsInput = {
    where?: PositionWhereInput
    data: XOR<PositionUpdateWithoutJobsInput, PositionUncheckedUpdateWithoutJobsInput>
  }

  export type PositionUpdateWithoutJobsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PositionUncheckedUpdateWithoutJobsInput = {
    position_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutJobsInput = {
    update: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
    create: XOR<UserCreateWithoutJobsInput, UserUncheckedCreateWithoutJobsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutJobsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutJobsInput, UserUncheckedUpdateWithoutJobsInput>
  }

  export type UserUpdateWithoutJobsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    times?: TimeUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutJobsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutStepsInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    times?: TimeCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    files?: FileCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutStepsInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    files?: FileUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutStepsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStepsInput, UserUncheckedCreateWithoutStepsInput>
  }

  export type PathCreateWithoutStepsInput = {
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type PathUncheckedCreateWithoutStepsInput = {
    path_id?: number
    name: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type PathCreateOrConnectWithoutStepsInput = {
    where: PathWhereUniqueInput
    create: XOR<PathCreateWithoutStepsInput, PathUncheckedCreateWithoutStepsInput>
  }

  export type UserUpsertWithoutStepsInput = {
    update: XOR<UserUpdateWithoutStepsInput, UserUncheckedUpdateWithoutStepsInput>
    create: XOR<UserCreateWithoutStepsInput, UserUncheckedCreateWithoutStepsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStepsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStepsInput, UserUncheckedUpdateWithoutStepsInput>
  }

  export type UserUpdateWithoutStepsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    times?: TimeUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    files?: FileUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutStepsInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    files?: FileUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PathUpsertWithoutStepsInput = {
    update: XOR<PathUpdateWithoutStepsInput, PathUncheckedUpdateWithoutStepsInput>
    create: XOR<PathCreateWithoutStepsInput, PathUncheckedCreateWithoutStepsInput>
    where?: PathWhereInput
  }

  export type PathUpdateToOneWithWhereWithoutStepsInput = {
    where?: PathWhereInput
    data: XOR<PathUpdateWithoutStepsInput, PathUncheckedUpdateWithoutStepsInput>
  }

  export type PathUpdateWithoutStepsInput = {
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PathUncheckedUpdateWithoutStepsInput = {
    path_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StepCreateWithoutPathInput = {
    name: string
    image_url?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutStepsInput
  }

  export type StepUncheckedCreateWithoutPathInput = {
    step_id?: number
    name: string
    image_url?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type StepCreateOrConnectWithoutPathInput = {
    where: StepWhereUniqueInput
    create: XOR<StepCreateWithoutPathInput, StepUncheckedCreateWithoutPathInput>
  }

  export type StepCreateManyPathInputEnvelope = {
    data: StepCreateManyPathInput | StepCreateManyPathInput[]
    skipDuplicates?: boolean
  }

  export type StepUpsertWithWhereUniqueWithoutPathInput = {
    where: StepWhereUniqueInput
    update: XOR<StepUpdateWithoutPathInput, StepUncheckedUpdateWithoutPathInput>
    create: XOR<StepCreateWithoutPathInput, StepUncheckedCreateWithoutPathInput>
  }

  export type StepUpdateWithWhereUniqueWithoutPathInput = {
    where: StepWhereUniqueInput
    data: XOR<StepUpdateWithoutPathInput, StepUncheckedUpdateWithoutPathInput>
  }

  export type StepUpdateManyWithWhereWithoutPathInput = {
    where: StepScalarWhereInput
    data: XOR<StepUpdateManyMutationInput, StepUncheckedUpdateManyWithoutPathInput>
  }

  export type UserCreateWithoutFilesInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerCreateNestedManyWithoutUserInput
    times?: TimeCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerCreateNestedManyWithoutUserInput
    structures?: StructureCreateNestedManyWithoutUserInput
    statistics?: StatisticCreateNestedManyWithoutUserInput
    news?: NewsCreateNestedManyWithoutUserInput
    values?: ValueCreateNestedManyWithoutUserInput
    jobs?: JobCreateNestedManyWithoutUserInput
    steps?: StepCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    user_id?: string
    firstname: string
    lastname: string
    mail: string
    password: string
    created_at: Date | string
    updated_at: Date | string
    partners?: PartnerUncheckedCreateNestedManyWithoutUserInput
    times?: TimeUncheckedCreateNestedManyWithoutUserInput
    jobOffers?: Job_offerUncheckedCreateNestedManyWithoutUserInput
    structures?: StructureUncheckedCreateNestedManyWithoutUserInput
    statistics?: StatisticUncheckedCreateNestedManyWithoutUserInput
    news?: NewsUncheckedCreateNestedManyWithoutUserInput
    values?: ValueUncheckedCreateNestedManyWithoutUserInput
    jobs?: JobUncheckedCreateNestedManyWithoutUserInput
    steps?: StepUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUpdateManyWithoutUserNestedInput
    times?: TimeUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUpdateManyWithoutUserNestedInput
    structures?: StructureUpdateManyWithoutUserNestedInput
    statistics?: StatisticUpdateManyWithoutUserNestedInput
    news?: NewsUpdateManyWithoutUserNestedInput
    values?: ValueUpdateManyWithoutUserNestedInput
    jobs?: JobUpdateManyWithoutUserNestedInput
    steps?: StepUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    firstname?: StringFieldUpdateOperationsInput | string
    lastname?: StringFieldUpdateOperationsInput | string
    mail?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    partners?: PartnerUncheckedUpdateManyWithoutUserNestedInput
    times?: TimeUncheckedUpdateManyWithoutUserNestedInput
    jobOffers?: Job_offerUncheckedUpdateManyWithoutUserNestedInput
    structures?: StructureUncheckedUpdateManyWithoutUserNestedInput
    statistics?: StatisticUncheckedUpdateManyWithoutUserNestedInput
    news?: NewsUncheckedUpdateManyWithoutUserNestedInput
    values?: ValueUncheckedUpdateManyWithoutUserNestedInput
    jobs?: JobUncheckedUpdateManyWithoutUserNestedInput
    steps?: StepUncheckedUpdateManyWithoutUserNestedInput
  }

  export type StatisticCreateWithoutTypeInput = {
    label: string
    value: number
    year: number
    created_at: Date | string
    updated_at: Date | string
    user: UserCreateNestedOneWithoutStatisticsInput
  }

  export type StatisticUncheckedCreateWithoutTypeInput = {
    statistic_id?: number
    label: string
    value: number
    year: number
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type StatisticCreateOrConnectWithoutTypeInput = {
    where: StatisticWhereUniqueInput
    create: XOR<StatisticCreateWithoutTypeInput, StatisticUncheckedCreateWithoutTypeInput>
  }

  export type StatisticCreateManyTypeInputEnvelope = {
    data: StatisticCreateManyTypeInput | StatisticCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type StatisticUpsertWithWhereUniqueWithoutTypeInput = {
    where: StatisticWhereUniqueInput
    update: XOR<StatisticUpdateWithoutTypeInput, StatisticUncheckedUpdateWithoutTypeInput>
    create: XOR<StatisticCreateWithoutTypeInput, StatisticUncheckedCreateWithoutTypeInput>
  }

  export type StatisticUpdateWithWhereUniqueWithoutTypeInput = {
    where: StatisticWhereUniqueInput
    data: XOR<StatisticUpdateWithoutTypeInput, StatisticUncheckedUpdateWithoutTypeInput>
  }

  export type StatisticUpdateManyWithWhereWithoutTypeInput = {
    where: StatisticScalarWhereInput
    data: XOR<StatisticUpdateManyMutationInput, StatisticUncheckedUpdateManyWithoutTypeInput>
  }

  export type PartnerCreateManyUserInput = {
    parteners_id?: number
    name: string
    image_url: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type TimeCreateManyUserInput = {
    time_id?: number
    year: number
    event_description: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type Job_offerCreateManyUserInput = {
    job_offer_id?: number
    name: string
    job_type: string
    city?: string | null
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type StructureCreateManyUserInput = {
    structure_id?: number
    name: string
    image_url?: string | null
    description: string
    address?: string | null
    phone_number?: string | null
    missions?: string | null
    link?: string | null
    schedule?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type StatisticCreateManyUserInput = {
    statistic_id?: number
    label: string
    value: number
    year: number
    created_at: Date | string
    updated_at: Date | string
    type_id: number
  }

  export type NewsCreateManyUserInput = {
    news_id?: number
    name: string
    image_url?: string | null
    link?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
  }

  export type ValueCreateManyUserInput = {
    value_id?: number
    name: string
    image_url?: string | null
    created_at: Date | string
    updated_at: Date | string
  }

  export type JobCreateManyUserInput = {
    job_id?: number
    function: string
    created_at: Date | string
    updated_at: Date | string
    position_id: number
  }

  export type StepCreateManyUserInput = {
    step_id?: number
    name: string
    image_url?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    path_id: number
  }

  export type FileCreateManyUserInput = {
    file_id?: number
    name: string
    file: Uint8Array
    created_at: Date | string
    updated_at: Date | string
  }

  export type PartnerUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateWithoutUserInput = {
    parteners_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PartnerUncheckedUpdateManyWithoutUserInput = {
    parteners_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeUpdateWithoutUserInput = {
    year?: IntFieldUpdateOperationsInput | number
    event_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeUncheckedUpdateWithoutUserInput = {
    time_id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    event_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TimeUncheckedUpdateManyWithoutUserInput = {
    time_id?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    event_description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Job_offerUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Job_offerUncheckedUpdateWithoutUserInput = {
    job_offer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Job_offerUncheckedUpdateManyWithoutUserInput = {
    job_offer_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    job_type?: StringFieldUpdateOperationsInput | string
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StructureUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    missions?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StructureUncheckedUpdateWithoutUserInput = {
    structure_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    missions?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StructureUncheckedUpdateManyWithoutUserInput = {
    structure_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phone_number?: NullableStringFieldUpdateOperationsInput | string | null
    missions?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    schedule?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StatisticUpdateWithoutUserInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type?: TypeUpdateOneRequiredWithoutStatisticsNestedInput
  }

  export type StatisticUncheckedUpdateWithoutUserInput = {
    statistic_id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
  }

  export type StatisticUncheckedUpdateManyWithoutUserInput = {
    statistic_id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    type_id?: IntFieldUpdateOperationsInput | number
  }

  export type NewsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateWithoutUserInput = {
    news_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsUncheckedUpdateManyWithoutUserInput = {
    news_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValueUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValueUncheckedUpdateWithoutUserInput = {
    value_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ValueUncheckedUpdateManyWithoutUserInput = {
    value_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobUpdateWithoutUserInput = {
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    position?: PositionUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutUserInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    position_id?: IntFieldUpdateOperationsInput | number
  }

  export type JobUncheckedUpdateManyWithoutUserInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    position_id?: IntFieldUpdateOperationsInput | number
  }

  export type StepUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    path?: PathUpdateOneRequiredWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutUserInput = {
    step_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    path_id?: IntFieldUpdateOperationsInput | number
  }

  export type StepUncheckedUpdateManyWithoutUserInput = {
    step_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    path_id?: IntFieldUpdateOperationsInput | number
  }

  export type FileUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateWithoutUserInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FileUncheckedUpdateManyWithoutUserInput = {
    file_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    file?: BytesFieldUpdateOperationsInput | Uint8Array
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JobCreateManyPositionInput = {
    job_id?: number
    function: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type JobUpdateWithoutPositionInput = {
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutJobsNestedInput
  }

  export type JobUncheckedUpdateWithoutPositionInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type JobUncheckedUpdateManyWithoutPositionInput = {
    job_id?: IntFieldUpdateOperationsInput | number
    function?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StepCreateManyPathInput = {
    step_id?: number
    name: string
    image_url?: string | null
    description: string
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type StepUpdateWithoutPathInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStepsNestedInput
  }

  export type StepUncheckedUpdateWithoutPathInput = {
    step_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StepUncheckedUpdateManyWithoutPathInput = {
    step_id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StatisticCreateManyTypeInput = {
    statistic_id?: number
    label: string
    value: number
    year: number
    created_at: Date | string
    updated_at: Date | string
    user_id: string
  }

  export type StatisticUpdateWithoutTypeInput = {
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutStatisticsNestedInput
  }

  export type StatisticUncheckedUpdateWithoutTypeInput = {
    statistic_id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type StatisticUncheckedUpdateManyWithoutTypeInput = {
    statistic_id?: IntFieldUpdateOperationsInput | number
    label?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    year?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user_id?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}