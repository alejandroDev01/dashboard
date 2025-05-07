
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
 * Model Proxy
 * 
 */
export type Proxy = $Result.DefaultSelection<Prisma.$ProxyPayload>
/**
 * Model Solicitudes
 * 
 */
export type Solicitudes = $Result.DefaultSelection<Prisma.$SolicitudesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Proxies
 * const proxies = await prisma.proxy.findMany()
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
   * // Fetch zero or more Proxies
   * const proxies = await prisma.proxy.findMany()
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
   * `prisma.proxy`: Exposes CRUD operations for the **Proxy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proxies
    * const proxies = await prisma.proxy.findMany()
    * ```
    */
  get proxy(): Prisma.ProxyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.solicitudes`: Exposes CRUD operations for the **Solicitudes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Solicitudes
    * const solicitudes = await prisma.solicitudes.findMany()
    * ```
    */
  get solicitudes(): Prisma.SolicitudesDelegate<ExtArgs, ClientOptions>;
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
    Proxy: 'Proxy',
    Solicitudes: 'Solicitudes'
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
      modelProps: "proxy" | "solicitudes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Proxy: {
        payload: Prisma.$ProxyPayload<ExtArgs>
        fields: Prisma.ProxyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProxyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProxyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          findFirst: {
            args: Prisma.ProxyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProxyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          findMany: {
            args: Prisma.ProxyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>[]
          }
          create: {
            args: Prisma.ProxyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          createMany: {
            args: Prisma.ProxyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProxyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>[]
          }
          delete: {
            args: Prisma.ProxyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          update: {
            args: Prisma.ProxyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          deleteMany: {
            args: Prisma.ProxyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProxyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProxyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>[]
          }
          upsert: {
            args: Prisma.ProxyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProxyPayload>
          }
          aggregate: {
            args: Prisma.ProxyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProxy>
          }
          groupBy: {
            args: Prisma.ProxyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProxyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProxyCountArgs<ExtArgs>
            result: $Utils.Optional<ProxyCountAggregateOutputType> | number
          }
        }
      }
      Solicitudes: {
        payload: Prisma.$SolicitudesPayload<ExtArgs>
        fields: Prisma.SolicitudesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SolicitudesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SolicitudesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload>
          }
          findFirst: {
            args: Prisma.SolicitudesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SolicitudesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload>
          }
          findMany: {
            args: Prisma.SolicitudesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload>[]
          }
          create: {
            args: Prisma.SolicitudesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload>
          }
          createMany: {
            args: Prisma.SolicitudesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SolicitudesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload>[]
          }
          delete: {
            args: Prisma.SolicitudesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload>
          }
          update: {
            args: Prisma.SolicitudesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload>
          }
          deleteMany: {
            args: Prisma.SolicitudesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SolicitudesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SolicitudesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload>[]
          }
          upsert: {
            args: Prisma.SolicitudesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SolicitudesPayload>
          }
          aggregate: {
            args: Prisma.SolicitudesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSolicitudes>
          }
          groupBy: {
            args: Prisma.SolicitudesGroupByArgs<ExtArgs>
            result: $Utils.Optional<SolicitudesGroupByOutputType>[]
          }
          count: {
            args: Prisma.SolicitudesCountArgs<ExtArgs>
            result: $Utils.Optional<SolicitudesCountAggregateOutputType> | number
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
    proxy?: ProxyOmit
    solicitudes?: SolicitudesOmit
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
   * Count Type ProxyCountOutputType
   */

  export type ProxyCountOutputType = {
    Solicitudes: number
  }

  export type ProxyCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Solicitudes?: boolean | ProxyCountOutputTypeCountSolicitudesArgs
  }

  // Custom InputTypes
  /**
   * ProxyCountOutputType without action
   */
  export type ProxyCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProxyCountOutputType
     */
    select?: ProxyCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProxyCountOutputType without action
   */
  export type ProxyCountOutputTypeCountSolicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Proxy
   */

  export type AggregateProxy = {
    _count: ProxyCountAggregateOutputType | null
    _avg: ProxyAvgAggregateOutputType | null
    _sum: ProxySumAggregateOutputType | null
    _min: ProxyMinAggregateOutputType | null
    _max: ProxyMaxAggregateOutputType | null
  }

  export type ProxyAvgAggregateOutputType = {
    port: number | null
  }

  export type ProxySumAggregateOutputType = {
    port: number | null
  }

  export type ProxyMinAggregateOutputType = {
    id: string | null
    host: string | null
    port: number | null
    protocol: string | null
    createdAt: Date | null
  }

  export type ProxyMaxAggregateOutputType = {
    id: string | null
    host: string | null
    port: number | null
    protocol: string | null
    createdAt: Date | null
  }

  export type ProxyCountAggregateOutputType = {
    id: number
    host: number
    port: number
    protocol: number
    createdAt: number
    _all: number
  }


  export type ProxyAvgAggregateInputType = {
    port?: true
  }

  export type ProxySumAggregateInputType = {
    port?: true
  }

  export type ProxyMinAggregateInputType = {
    id?: true
    host?: true
    port?: true
    protocol?: true
    createdAt?: true
  }

  export type ProxyMaxAggregateInputType = {
    id?: true
    host?: true
    port?: true
    protocol?: true
    createdAt?: true
  }

  export type ProxyCountAggregateInputType = {
    id?: true
    host?: true
    port?: true
    protocol?: true
    createdAt?: true
    _all?: true
  }

  export type ProxyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proxy to aggregate.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proxies
    **/
    _count?: true | ProxyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProxyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProxySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProxyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProxyMaxAggregateInputType
  }

  export type GetProxyAggregateType<T extends ProxyAggregateArgs> = {
        [P in keyof T & keyof AggregateProxy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProxy[P]>
      : GetScalarType<T[P], AggregateProxy[P]>
  }




  export type ProxyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProxyWhereInput
    orderBy?: ProxyOrderByWithAggregationInput | ProxyOrderByWithAggregationInput[]
    by: ProxyScalarFieldEnum[] | ProxyScalarFieldEnum
    having?: ProxyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProxyCountAggregateInputType | true
    _avg?: ProxyAvgAggregateInputType
    _sum?: ProxySumAggregateInputType
    _min?: ProxyMinAggregateInputType
    _max?: ProxyMaxAggregateInputType
  }

  export type ProxyGroupByOutputType = {
    id: string
    host: string
    port: number
    protocol: string
    createdAt: Date
    _count: ProxyCountAggregateOutputType | null
    _avg: ProxyAvgAggregateOutputType | null
    _sum: ProxySumAggregateOutputType | null
    _min: ProxyMinAggregateOutputType | null
    _max: ProxyMaxAggregateOutputType | null
  }

  type GetProxyGroupByPayload<T extends ProxyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProxyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProxyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProxyGroupByOutputType[P]>
            : GetScalarType<T[P], ProxyGroupByOutputType[P]>
        }
      >
    >


  export type ProxySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    port?: boolean
    protocol?: boolean
    createdAt?: boolean
    Solicitudes?: boolean | Proxy$SolicitudesArgs<ExtArgs>
    _count?: boolean | ProxyCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["proxy"]>

  export type ProxySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    port?: boolean
    protocol?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["proxy"]>

  export type ProxySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    host?: boolean
    port?: boolean
    protocol?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["proxy"]>

  export type ProxySelectScalar = {
    id?: boolean
    host?: boolean
    port?: boolean
    protocol?: boolean
    createdAt?: boolean
  }

  export type ProxyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "host" | "port" | "protocol" | "createdAt", ExtArgs["result"]["proxy"]>
  export type ProxyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Solicitudes?: boolean | Proxy$SolicitudesArgs<ExtArgs>
    _count?: boolean | ProxyCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProxyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProxyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProxyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Proxy"
    objects: {
      Solicitudes: Prisma.$SolicitudesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      host: string
      port: number
      protocol: string
      createdAt: Date
    }, ExtArgs["result"]["proxy"]>
    composites: {}
  }

  type ProxyGetPayload<S extends boolean | null | undefined | ProxyDefaultArgs> = $Result.GetResult<Prisma.$ProxyPayload, S>

  type ProxyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProxyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProxyCountAggregateInputType | true
    }

  export interface ProxyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Proxy'], meta: { name: 'Proxy' } }
    /**
     * Find zero or one Proxy that matches the filter.
     * @param {ProxyFindUniqueArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProxyFindUniqueArgs>(args: SelectSubset<T, ProxyFindUniqueArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Proxy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProxyFindUniqueOrThrowArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProxyFindUniqueOrThrowArgs>(args: SelectSubset<T, ProxyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proxy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyFindFirstArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProxyFindFirstArgs>(args?: SelectSubset<T, ProxyFindFirstArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Proxy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyFindFirstOrThrowArgs} args - Arguments to find a Proxy
     * @example
     * // Get one Proxy
     * const proxy = await prisma.proxy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProxyFindFirstOrThrowArgs>(args?: SelectSubset<T, ProxyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Proxies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proxies
     * const proxies = await prisma.proxy.findMany()
     * 
     * // Get first 10 Proxies
     * const proxies = await prisma.proxy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proxyWithIdOnly = await prisma.proxy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProxyFindManyArgs>(args?: SelectSubset<T, ProxyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Proxy.
     * @param {ProxyCreateArgs} args - Arguments to create a Proxy.
     * @example
     * // Create one Proxy
     * const Proxy = await prisma.proxy.create({
     *   data: {
     *     // ... data to create a Proxy
     *   }
     * })
     * 
     */
    create<T extends ProxyCreateArgs>(args: SelectSubset<T, ProxyCreateArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Proxies.
     * @param {ProxyCreateManyArgs} args - Arguments to create many Proxies.
     * @example
     * // Create many Proxies
     * const proxy = await prisma.proxy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProxyCreateManyArgs>(args?: SelectSubset<T, ProxyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Proxies and returns the data saved in the database.
     * @param {ProxyCreateManyAndReturnArgs} args - Arguments to create many Proxies.
     * @example
     * // Create many Proxies
     * const proxy = await prisma.proxy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Proxies and only return the `id`
     * const proxyWithIdOnly = await prisma.proxy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProxyCreateManyAndReturnArgs>(args?: SelectSubset<T, ProxyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Proxy.
     * @param {ProxyDeleteArgs} args - Arguments to delete one Proxy.
     * @example
     * // Delete one Proxy
     * const Proxy = await prisma.proxy.delete({
     *   where: {
     *     // ... filter to delete one Proxy
     *   }
     * })
     * 
     */
    delete<T extends ProxyDeleteArgs>(args: SelectSubset<T, ProxyDeleteArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Proxy.
     * @param {ProxyUpdateArgs} args - Arguments to update one Proxy.
     * @example
     * // Update one Proxy
     * const proxy = await prisma.proxy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProxyUpdateArgs>(args: SelectSubset<T, ProxyUpdateArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Proxies.
     * @param {ProxyDeleteManyArgs} args - Arguments to filter Proxies to delete.
     * @example
     * // Delete a few Proxies
     * const { count } = await prisma.proxy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProxyDeleteManyArgs>(args?: SelectSubset<T, ProxyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proxies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proxies
     * const proxy = await prisma.proxy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProxyUpdateManyArgs>(args: SelectSubset<T, ProxyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proxies and returns the data updated in the database.
     * @param {ProxyUpdateManyAndReturnArgs} args - Arguments to update many Proxies.
     * @example
     * // Update many Proxies
     * const proxy = await prisma.proxy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Proxies and only return the `id`
     * const proxyWithIdOnly = await prisma.proxy.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends ProxyUpdateManyAndReturnArgs>(args: SelectSubset<T, ProxyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Proxy.
     * @param {ProxyUpsertArgs} args - Arguments to update or create a Proxy.
     * @example
     * // Update or create a Proxy
     * const proxy = await prisma.proxy.upsert({
     *   create: {
     *     // ... data to create a Proxy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Proxy we want to update
     *   }
     * })
     */
    upsert<T extends ProxyUpsertArgs>(args: SelectSubset<T, ProxyUpsertArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Proxies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyCountArgs} args - Arguments to filter Proxies to count.
     * @example
     * // Count the number of Proxies
     * const count = await prisma.proxy.count({
     *   where: {
     *     // ... the filter for the Proxies we want to count
     *   }
     * })
    **/
    count<T extends ProxyCountArgs>(
      args?: Subset<T, ProxyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProxyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Proxy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProxyAggregateArgs>(args: Subset<T, ProxyAggregateArgs>): Prisma.PrismaPromise<GetProxyAggregateType<T>>

    /**
     * Group by Proxy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProxyGroupByArgs} args - Group by arguments.
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
      T extends ProxyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProxyGroupByArgs['orderBy'] }
        : { orderBy?: ProxyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProxyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProxyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Proxy model
   */
  readonly fields: ProxyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Proxy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProxyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Solicitudes<T extends Proxy$SolicitudesArgs<ExtArgs> = {}>(args?: Subset<T, Proxy$SolicitudesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Proxy model
   */
  interface ProxyFieldRefs {
    readonly id: FieldRef<"Proxy", 'String'>
    readonly host: FieldRef<"Proxy", 'String'>
    readonly port: FieldRef<"Proxy", 'Int'>
    readonly protocol: FieldRef<"Proxy", 'String'>
    readonly createdAt: FieldRef<"Proxy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Proxy findUnique
   */
  export type ProxyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy findUniqueOrThrow
   */
  export type ProxyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy findFirst
   */
  export type ProxyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proxies.
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proxies.
     */
    distinct?: ProxyScalarFieldEnum | ProxyScalarFieldEnum[]
  }

  /**
   * Proxy findFirstOrThrow
   */
  export type ProxyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxy to fetch.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proxies.
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proxies.
     */
    distinct?: ProxyScalarFieldEnum | ProxyScalarFieldEnum[]
  }

  /**
   * Proxy findMany
   */
  export type ProxyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter, which Proxies to fetch.
     */
    where?: ProxyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proxies to fetch.
     */
    orderBy?: ProxyOrderByWithRelationInput | ProxyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proxies.
     */
    cursor?: ProxyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proxies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proxies.
     */
    skip?: number
    distinct?: ProxyScalarFieldEnum | ProxyScalarFieldEnum[]
  }

  /**
   * Proxy create
   */
  export type ProxyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * The data needed to create a Proxy.
     */
    data: XOR<ProxyCreateInput, ProxyUncheckedCreateInput>
  }

  /**
   * Proxy createMany
   */
  export type ProxyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proxies.
     */
    data: ProxyCreateManyInput | ProxyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proxy createManyAndReturn
   */
  export type ProxyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * The data used to create many Proxies.
     */
    data: ProxyCreateManyInput | ProxyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Proxy update
   */
  export type ProxyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * The data needed to update a Proxy.
     */
    data: XOR<ProxyUpdateInput, ProxyUncheckedUpdateInput>
    /**
     * Choose, which Proxy to update.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy updateMany
   */
  export type ProxyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proxies.
     */
    data: XOR<ProxyUpdateManyMutationInput, ProxyUncheckedUpdateManyInput>
    /**
     * Filter which Proxies to update
     */
    where?: ProxyWhereInput
    /**
     * Limit how many Proxies to update.
     */
    limit?: number
  }

  /**
   * Proxy updateManyAndReturn
   */
  export type ProxyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * The data used to update Proxies.
     */
    data: XOR<ProxyUpdateManyMutationInput, ProxyUncheckedUpdateManyInput>
    /**
     * Filter which Proxies to update
     */
    where?: ProxyWhereInput
    /**
     * Limit how many Proxies to update.
     */
    limit?: number
  }

  /**
   * Proxy upsert
   */
  export type ProxyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * The filter to search for the Proxy to update in case it exists.
     */
    where: ProxyWhereUniqueInput
    /**
     * In case the Proxy found by the `where` argument doesn't exist, create a new Proxy with this data.
     */
    create: XOR<ProxyCreateInput, ProxyUncheckedCreateInput>
    /**
     * In case the Proxy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProxyUpdateInput, ProxyUncheckedUpdateInput>
  }

  /**
   * Proxy delete
   */
  export type ProxyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
    /**
     * Filter which Proxy to delete.
     */
    where: ProxyWhereUniqueInput
  }

  /**
   * Proxy deleteMany
   */
  export type ProxyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proxies to delete
     */
    where?: ProxyWhereInput
    /**
     * Limit how many Proxies to delete.
     */
    limit?: number
  }

  /**
   * Proxy.Solicitudes
   */
  export type Proxy$SolicitudesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    where?: SolicitudesWhereInput
    orderBy?: SolicitudesOrderByWithRelationInput | SolicitudesOrderByWithRelationInput[]
    cursor?: SolicitudesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SolicitudesScalarFieldEnum | SolicitudesScalarFieldEnum[]
  }

  /**
   * Proxy without action
   */
  export type ProxyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Proxy
     */
    select?: ProxySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Proxy
     */
    omit?: ProxyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProxyInclude<ExtArgs> | null
  }


  /**
   * Model Solicitudes
   */

  export type AggregateSolicitudes = {
    _count: SolicitudesCountAggregateOutputType | null
    _min: SolicitudesMinAggregateOutputType | null
    _max: SolicitudesMaxAggregateOutputType | null
  }

  export type SolicitudesMinAggregateOutputType = {
    id: string | null
    ipPublica: string | null
    status: string | null
    header: string | null
    createdAt: Date | null
    proxyId: string | null
  }

  export type SolicitudesMaxAggregateOutputType = {
    id: string | null
    ipPublica: string | null
    status: string | null
    header: string | null
    createdAt: Date | null
    proxyId: string | null
  }

  export type SolicitudesCountAggregateOutputType = {
    id: number
    ipPublica: number
    status: number
    header: number
    body: number
    createdAt: number
    proxyId: number
    _all: number
  }


  export type SolicitudesMinAggregateInputType = {
    id?: true
    ipPublica?: true
    status?: true
    header?: true
    createdAt?: true
    proxyId?: true
  }

  export type SolicitudesMaxAggregateInputType = {
    id?: true
    ipPublica?: true
    status?: true
    header?: true
    createdAt?: true
    proxyId?: true
  }

  export type SolicitudesCountAggregateInputType = {
    id?: true
    ipPublica?: true
    status?: true
    header?: true
    body?: true
    createdAt?: true
    proxyId?: true
    _all?: true
  }

  export type SolicitudesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitudes to aggregate.
     */
    where?: SolicitudesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitudes to fetch.
     */
    orderBy?: SolicitudesOrderByWithRelationInput | SolicitudesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SolicitudesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Solicitudes
    **/
    _count?: true | SolicitudesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SolicitudesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SolicitudesMaxAggregateInputType
  }

  export type GetSolicitudesAggregateType<T extends SolicitudesAggregateArgs> = {
        [P in keyof T & keyof AggregateSolicitudes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSolicitudes[P]>
      : GetScalarType<T[P], AggregateSolicitudes[P]>
  }




  export type SolicitudesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SolicitudesWhereInput
    orderBy?: SolicitudesOrderByWithAggregationInput | SolicitudesOrderByWithAggregationInput[]
    by: SolicitudesScalarFieldEnum[] | SolicitudesScalarFieldEnum
    having?: SolicitudesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SolicitudesCountAggregateInputType | true
    _min?: SolicitudesMinAggregateInputType
    _max?: SolicitudesMaxAggregateInputType
  }

  export type SolicitudesGroupByOutputType = {
    id: string
    ipPublica: string | null
    status: string
    header: string | null
    body: JsonValue | null
    createdAt: Date
    proxyId: string
    _count: SolicitudesCountAggregateOutputType | null
    _min: SolicitudesMinAggregateOutputType | null
    _max: SolicitudesMaxAggregateOutputType | null
  }

  type GetSolicitudesGroupByPayload<T extends SolicitudesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SolicitudesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SolicitudesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SolicitudesGroupByOutputType[P]>
            : GetScalarType<T[P], SolicitudesGroupByOutputType[P]>
        }
      >
    >


  export type SolicitudesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipPublica?: boolean
    status?: boolean
    header?: boolean
    body?: boolean
    createdAt?: boolean
    proxyId?: boolean
    proxy?: boolean | ProxyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitudes"]>

  export type SolicitudesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipPublica?: boolean
    status?: boolean
    header?: boolean
    body?: boolean
    createdAt?: boolean
    proxyId?: boolean
    proxy?: boolean | ProxyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitudes"]>

  export type SolicitudesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ipPublica?: boolean
    status?: boolean
    header?: boolean
    body?: boolean
    createdAt?: boolean
    proxyId?: boolean
    proxy?: boolean | ProxyDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["solicitudes"]>

  export type SolicitudesSelectScalar = {
    id?: boolean
    ipPublica?: boolean
    status?: boolean
    header?: boolean
    body?: boolean
    createdAt?: boolean
    proxyId?: boolean
  }

  export type SolicitudesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ipPublica" | "status" | "header" | "body" | "createdAt" | "proxyId", ExtArgs["result"]["solicitudes"]>
  export type SolicitudesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proxy?: boolean | ProxyDefaultArgs<ExtArgs>
  }
  export type SolicitudesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proxy?: boolean | ProxyDefaultArgs<ExtArgs>
  }
  export type SolicitudesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    proxy?: boolean | ProxyDefaultArgs<ExtArgs>
  }

  export type $SolicitudesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Solicitudes"
    objects: {
      proxy: Prisma.$ProxyPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ipPublica: string | null
      status: string
      header: string | null
      body: Prisma.JsonValue | null
      createdAt: Date
      proxyId: string
    }, ExtArgs["result"]["solicitudes"]>
    composites: {}
  }

  type SolicitudesGetPayload<S extends boolean | null | undefined | SolicitudesDefaultArgs> = $Result.GetResult<Prisma.$SolicitudesPayload, S>

  type SolicitudesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SolicitudesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SolicitudesCountAggregateInputType | true
    }

  export interface SolicitudesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Solicitudes'], meta: { name: 'Solicitudes' } }
    /**
     * Find zero or one Solicitudes that matches the filter.
     * @param {SolicitudesFindUniqueArgs} args - Arguments to find a Solicitudes
     * @example
     * // Get one Solicitudes
     * const solicitudes = await prisma.solicitudes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SolicitudesFindUniqueArgs>(args: SelectSubset<T, SolicitudesFindUniqueArgs<ExtArgs>>): Prisma__SolicitudesClient<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Solicitudes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SolicitudesFindUniqueOrThrowArgs} args - Arguments to find a Solicitudes
     * @example
     * // Get one Solicitudes
     * const solicitudes = await prisma.solicitudes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SolicitudesFindUniqueOrThrowArgs>(args: SelectSubset<T, SolicitudesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SolicitudesClient<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitudes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudesFindFirstArgs} args - Arguments to find a Solicitudes
     * @example
     * // Get one Solicitudes
     * const solicitudes = await prisma.solicitudes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SolicitudesFindFirstArgs>(args?: SelectSubset<T, SolicitudesFindFirstArgs<ExtArgs>>): Prisma__SolicitudesClient<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Solicitudes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudesFindFirstOrThrowArgs} args - Arguments to find a Solicitudes
     * @example
     * // Get one Solicitudes
     * const solicitudes = await prisma.solicitudes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SolicitudesFindFirstOrThrowArgs>(args?: SelectSubset<T, SolicitudesFindFirstOrThrowArgs<ExtArgs>>): Prisma__SolicitudesClient<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Solicitudes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Solicitudes
     * const solicitudes = await prisma.solicitudes.findMany()
     * 
     * // Get first 10 Solicitudes
     * const solicitudes = await prisma.solicitudes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const solicitudesWithIdOnly = await prisma.solicitudes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SolicitudesFindManyArgs>(args?: SelectSubset<T, SolicitudesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Solicitudes.
     * @param {SolicitudesCreateArgs} args - Arguments to create a Solicitudes.
     * @example
     * // Create one Solicitudes
     * const Solicitudes = await prisma.solicitudes.create({
     *   data: {
     *     // ... data to create a Solicitudes
     *   }
     * })
     * 
     */
    create<T extends SolicitudesCreateArgs>(args: SelectSubset<T, SolicitudesCreateArgs<ExtArgs>>): Prisma__SolicitudesClient<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Solicitudes.
     * @param {SolicitudesCreateManyArgs} args - Arguments to create many Solicitudes.
     * @example
     * // Create many Solicitudes
     * const solicitudes = await prisma.solicitudes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SolicitudesCreateManyArgs>(args?: SelectSubset<T, SolicitudesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Solicitudes and returns the data saved in the database.
     * @param {SolicitudesCreateManyAndReturnArgs} args - Arguments to create many Solicitudes.
     * @example
     * // Create many Solicitudes
     * const solicitudes = await prisma.solicitudes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Solicitudes and only return the `id`
     * const solicitudesWithIdOnly = await prisma.solicitudes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SolicitudesCreateManyAndReturnArgs>(args?: SelectSubset<T, SolicitudesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Solicitudes.
     * @param {SolicitudesDeleteArgs} args - Arguments to delete one Solicitudes.
     * @example
     * // Delete one Solicitudes
     * const Solicitudes = await prisma.solicitudes.delete({
     *   where: {
     *     // ... filter to delete one Solicitudes
     *   }
     * })
     * 
     */
    delete<T extends SolicitudesDeleteArgs>(args: SelectSubset<T, SolicitudesDeleteArgs<ExtArgs>>): Prisma__SolicitudesClient<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Solicitudes.
     * @param {SolicitudesUpdateArgs} args - Arguments to update one Solicitudes.
     * @example
     * // Update one Solicitudes
     * const solicitudes = await prisma.solicitudes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SolicitudesUpdateArgs>(args: SelectSubset<T, SolicitudesUpdateArgs<ExtArgs>>): Prisma__SolicitudesClient<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Solicitudes.
     * @param {SolicitudesDeleteManyArgs} args - Arguments to filter Solicitudes to delete.
     * @example
     * // Delete a few Solicitudes
     * const { count } = await prisma.solicitudes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SolicitudesDeleteManyArgs>(args?: SelectSubset<T, SolicitudesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Solicitudes
     * const solicitudes = await prisma.solicitudes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SolicitudesUpdateManyArgs>(args: SelectSubset<T, SolicitudesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Solicitudes and returns the data updated in the database.
     * @param {SolicitudesUpdateManyAndReturnArgs} args - Arguments to update many Solicitudes.
     * @example
     * // Update many Solicitudes
     * const solicitudes = await prisma.solicitudes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Solicitudes and only return the `id`
     * const solicitudesWithIdOnly = await prisma.solicitudes.updateManyAndReturn({
     *   select: { id: true },
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
    updateManyAndReturn<T extends SolicitudesUpdateManyAndReturnArgs>(args: SelectSubset<T, SolicitudesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Solicitudes.
     * @param {SolicitudesUpsertArgs} args - Arguments to update or create a Solicitudes.
     * @example
     * // Update or create a Solicitudes
     * const solicitudes = await prisma.solicitudes.upsert({
     *   create: {
     *     // ... data to create a Solicitudes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Solicitudes we want to update
     *   }
     * })
     */
    upsert<T extends SolicitudesUpsertArgs>(args: SelectSubset<T, SolicitudesUpsertArgs<ExtArgs>>): Prisma__SolicitudesClient<$Result.GetResult<Prisma.$SolicitudesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Solicitudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudesCountArgs} args - Arguments to filter Solicitudes to count.
     * @example
     * // Count the number of Solicitudes
     * const count = await prisma.solicitudes.count({
     *   where: {
     *     // ... the filter for the Solicitudes we want to count
     *   }
     * })
    **/
    count<T extends SolicitudesCountArgs>(
      args?: Subset<T, SolicitudesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SolicitudesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Solicitudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SolicitudesAggregateArgs>(args: Subset<T, SolicitudesAggregateArgs>): Prisma.PrismaPromise<GetSolicitudesAggregateType<T>>

    /**
     * Group by Solicitudes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SolicitudesGroupByArgs} args - Group by arguments.
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
      T extends SolicitudesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SolicitudesGroupByArgs['orderBy'] }
        : { orderBy?: SolicitudesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SolicitudesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSolicitudesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Solicitudes model
   */
  readonly fields: SolicitudesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Solicitudes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SolicitudesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    proxy<T extends ProxyDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProxyDefaultArgs<ExtArgs>>): Prisma__ProxyClient<$Result.GetResult<Prisma.$ProxyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Solicitudes model
   */
  interface SolicitudesFieldRefs {
    readonly id: FieldRef<"Solicitudes", 'String'>
    readonly ipPublica: FieldRef<"Solicitudes", 'String'>
    readonly status: FieldRef<"Solicitudes", 'String'>
    readonly header: FieldRef<"Solicitudes", 'String'>
    readonly body: FieldRef<"Solicitudes", 'Json'>
    readonly createdAt: FieldRef<"Solicitudes", 'DateTime'>
    readonly proxyId: FieldRef<"Solicitudes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Solicitudes findUnique
   */
  export type SolicitudesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    /**
     * Filter, which Solicitudes to fetch.
     */
    where: SolicitudesWhereUniqueInput
  }

  /**
   * Solicitudes findUniqueOrThrow
   */
  export type SolicitudesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    /**
     * Filter, which Solicitudes to fetch.
     */
    where: SolicitudesWhereUniqueInput
  }

  /**
   * Solicitudes findFirst
   */
  export type SolicitudesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    /**
     * Filter, which Solicitudes to fetch.
     */
    where?: SolicitudesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitudes to fetch.
     */
    orderBy?: SolicitudesOrderByWithRelationInput | SolicitudesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicitudes.
     */
    cursor?: SolicitudesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicitudes.
     */
    distinct?: SolicitudesScalarFieldEnum | SolicitudesScalarFieldEnum[]
  }

  /**
   * Solicitudes findFirstOrThrow
   */
  export type SolicitudesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    /**
     * Filter, which Solicitudes to fetch.
     */
    where?: SolicitudesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitudes to fetch.
     */
    orderBy?: SolicitudesOrderByWithRelationInput | SolicitudesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Solicitudes.
     */
    cursor?: SolicitudesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitudes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Solicitudes.
     */
    distinct?: SolicitudesScalarFieldEnum | SolicitudesScalarFieldEnum[]
  }

  /**
   * Solicitudes findMany
   */
  export type SolicitudesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    /**
     * Filter, which Solicitudes to fetch.
     */
    where?: SolicitudesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Solicitudes to fetch.
     */
    orderBy?: SolicitudesOrderByWithRelationInput | SolicitudesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Solicitudes.
     */
    cursor?: SolicitudesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Solicitudes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Solicitudes.
     */
    skip?: number
    distinct?: SolicitudesScalarFieldEnum | SolicitudesScalarFieldEnum[]
  }

  /**
   * Solicitudes create
   */
  export type SolicitudesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    /**
     * The data needed to create a Solicitudes.
     */
    data: XOR<SolicitudesCreateInput, SolicitudesUncheckedCreateInput>
  }

  /**
   * Solicitudes createMany
   */
  export type SolicitudesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Solicitudes.
     */
    data: SolicitudesCreateManyInput | SolicitudesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Solicitudes createManyAndReturn
   */
  export type SolicitudesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * The data used to create many Solicitudes.
     */
    data: SolicitudesCreateManyInput | SolicitudesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solicitudes update
   */
  export type SolicitudesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    /**
     * The data needed to update a Solicitudes.
     */
    data: XOR<SolicitudesUpdateInput, SolicitudesUncheckedUpdateInput>
    /**
     * Choose, which Solicitudes to update.
     */
    where: SolicitudesWhereUniqueInput
  }

  /**
   * Solicitudes updateMany
   */
  export type SolicitudesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Solicitudes.
     */
    data: XOR<SolicitudesUpdateManyMutationInput, SolicitudesUncheckedUpdateManyInput>
    /**
     * Filter which Solicitudes to update
     */
    where?: SolicitudesWhereInput
    /**
     * Limit how many Solicitudes to update.
     */
    limit?: number
  }

  /**
   * Solicitudes updateManyAndReturn
   */
  export type SolicitudesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * The data used to update Solicitudes.
     */
    data: XOR<SolicitudesUpdateManyMutationInput, SolicitudesUncheckedUpdateManyInput>
    /**
     * Filter which Solicitudes to update
     */
    where?: SolicitudesWhereInput
    /**
     * Limit how many Solicitudes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Solicitudes upsert
   */
  export type SolicitudesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    /**
     * The filter to search for the Solicitudes to update in case it exists.
     */
    where: SolicitudesWhereUniqueInput
    /**
     * In case the Solicitudes found by the `where` argument doesn't exist, create a new Solicitudes with this data.
     */
    create: XOR<SolicitudesCreateInput, SolicitudesUncheckedCreateInput>
    /**
     * In case the Solicitudes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SolicitudesUpdateInput, SolicitudesUncheckedUpdateInput>
  }

  /**
   * Solicitudes delete
   */
  export type SolicitudesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
    /**
     * Filter which Solicitudes to delete.
     */
    where: SolicitudesWhereUniqueInput
  }

  /**
   * Solicitudes deleteMany
   */
  export type SolicitudesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Solicitudes to delete
     */
    where?: SolicitudesWhereInput
    /**
     * Limit how many Solicitudes to delete.
     */
    limit?: number
  }

  /**
   * Solicitudes without action
   */
  export type SolicitudesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Solicitudes
     */
    select?: SolicitudesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Solicitudes
     */
    omit?: SolicitudesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SolicitudesInclude<ExtArgs> | null
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


  export const ProxyScalarFieldEnum: {
    id: 'id',
    host: 'host',
    port: 'port',
    protocol: 'protocol',
    createdAt: 'createdAt'
  };

  export type ProxyScalarFieldEnum = (typeof ProxyScalarFieldEnum)[keyof typeof ProxyScalarFieldEnum]


  export const SolicitudesScalarFieldEnum: {
    id: 'id',
    ipPublica: 'ipPublica',
    status: 'status',
    header: 'header',
    body: 'body',
    createdAt: 'createdAt',
    proxyId: 'proxyId'
  };

  export type SolicitudesScalarFieldEnum = (typeof SolicitudesScalarFieldEnum)[keyof typeof SolicitudesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


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


  export type ProxyWhereInput = {
    AND?: ProxyWhereInput | ProxyWhereInput[]
    OR?: ProxyWhereInput[]
    NOT?: ProxyWhereInput | ProxyWhereInput[]
    id?: StringFilter<"Proxy"> | string
    host?: StringFilter<"Proxy"> | string
    port?: IntFilter<"Proxy"> | number
    protocol?: StringFilter<"Proxy"> | string
    createdAt?: DateTimeFilter<"Proxy"> | Date | string
    Solicitudes?: SolicitudesListRelationFilter
  }

  export type ProxyOrderByWithRelationInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    createdAt?: SortOrder
    Solicitudes?: SolicitudesOrderByRelationAggregateInput
  }

  export type ProxyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProxyWhereInput | ProxyWhereInput[]
    OR?: ProxyWhereInput[]
    NOT?: ProxyWhereInput | ProxyWhereInput[]
    host?: StringFilter<"Proxy"> | string
    port?: IntFilter<"Proxy"> | number
    protocol?: StringFilter<"Proxy"> | string
    createdAt?: DateTimeFilter<"Proxy"> | Date | string
    Solicitudes?: SolicitudesListRelationFilter
  }, "id">

  export type ProxyOrderByWithAggregationInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    createdAt?: SortOrder
    _count?: ProxyCountOrderByAggregateInput
    _avg?: ProxyAvgOrderByAggregateInput
    _max?: ProxyMaxOrderByAggregateInput
    _min?: ProxyMinOrderByAggregateInput
    _sum?: ProxySumOrderByAggregateInput
  }

  export type ProxyScalarWhereWithAggregatesInput = {
    AND?: ProxyScalarWhereWithAggregatesInput | ProxyScalarWhereWithAggregatesInput[]
    OR?: ProxyScalarWhereWithAggregatesInput[]
    NOT?: ProxyScalarWhereWithAggregatesInput | ProxyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Proxy"> | string
    host?: StringWithAggregatesFilter<"Proxy"> | string
    port?: IntWithAggregatesFilter<"Proxy"> | number
    protocol?: StringWithAggregatesFilter<"Proxy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Proxy"> | Date | string
  }

  export type SolicitudesWhereInput = {
    AND?: SolicitudesWhereInput | SolicitudesWhereInput[]
    OR?: SolicitudesWhereInput[]
    NOT?: SolicitudesWhereInput | SolicitudesWhereInput[]
    id?: StringFilter<"Solicitudes"> | string
    ipPublica?: StringNullableFilter<"Solicitudes"> | string | null
    status?: StringFilter<"Solicitudes"> | string
    header?: StringNullableFilter<"Solicitudes"> | string | null
    body?: JsonNullableFilter<"Solicitudes">
    createdAt?: DateTimeFilter<"Solicitudes"> | Date | string
    proxyId?: StringFilter<"Solicitudes"> | string
    proxy?: XOR<ProxyScalarRelationFilter, ProxyWhereInput>
  }

  export type SolicitudesOrderByWithRelationInput = {
    id?: SortOrder
    ipPublica?: SortOrderInput | SortOrder
    status?: SortOrder
    header?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    proxyId?: SortOrder
    proxy?: ProxyOrderByWithRelationInput
  }

  export type SolicitudesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SolicitudesWhereInput | SolicitudesWhereInput[]
    OR?: SolicitudesWhereInput[]
    NOT?: SolicitudesWhereInput | SolicitudesWhereInput[]
    ipPublica?: StringNullableFilter<"Solicitudes"> | string | null
    status?: StringFilter<"Solicitudes"> | string
    header?: StringNullableFilter<"Solicitudes"> | string | null
    body?: JsonNullableFilter<"Solicitudes">
    createdAt?: DateTimeFilter<"Solicitudes"> | Date | string
    proxyId?: StringFilter<"Solicitudes"> | string
    proxy?: XOR<ProxyScalarRelationFilter, ProxyWhereInput>
  }, "id">

  export type SolicitudesOrderByWithAggregationInput = {
    id?: SortOrder
    ipPublica?: SortOrderInput | SortOrder
    status?: SortOrder
    header?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    proxyId?: SortOrder
    _count?: SolicitudesCountOrderByAggregateInput
    _max?: SolicitudesMaxOrderByAggregateInput
    _min?: SolicitudesMinOrderByAggregateInput
  }

  export type SolicitudesScalarWhereWithAggregatesInput = {
    AND?: SolicitudesScalarWhereWithAggregatesInput | SolicitudesScalarWhereWithAggregatesInput[]
    OR?: SolicitudesScalarWhereWithAggregatesInput[]
    NOT?: SolicitudesScalarWhereWithAggregatesInput | SolicitudesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Solicitudes"> | string
    ipPublica?: StringNullableWithAggregatesFilter<"Solicitudes"> | string | null
    status?: StringWithAggregatesFilter<"Solicitudes"> | string
    header?: StringNullableWithAggregatesFilter<"Solicitudes"> | string | null
    body?: JsonNullableWithAggregatesFilter<"Solicitudes">
    createdAt?: DateTimeWithAggregatesFilter<"Solicitudes"> | Date | string
    proxyId?: StringWithAggregatesFilter<"Solicitudes"> | string
  }

  export type ProxyCreateInput = {
    id?: string
    host: string
    port: number
    protocol: string
    createdAt?: Date | string
    Solicitudes?: SolicitudesCreateNestedManyWithoutProxyInput
  }

  export type ProxyUncheckedCreateInput = {
    id?: string
    host: string
    port: number
    protocol: string
    createdAt?: Date | string
    Solicitudes?: SolicitudesUncheckedCreateNestedManyWithoutProxyInput
  }

  export type ProxyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Solicitudes?: SolicitudesUpdateManyWithoutProxyNestedInput
  }

  export type ProxyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Solicitudes?: SolicitudesUncheckedUpdateManyWithoutProxyNestedInput
  }

  export type ProxyCreateManyInput = {
    id?: string
    host: string
    port: number
    protocol: string
    createdAt?: Date | string
  }

  export type ProxyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProxyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudesCreateInput = {
    id?: string
    ipPublica?: string | null
    status: string
    header?: string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    proxy: ProxyCreateNestedOneWithoutSolicitudesInput
  }

  export type SolicitudesUncheckedCreateInput = {
    id?: string
    ipPublica?: string | null
    status: string
    header?: string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    proxyId: string
  }

  export type SolicitudesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipPublica?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    header?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proxy?: ProxyUpdateOneRequiredWithoutSolicitudesNestedInput
  }

  export type SolicitudesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipPublica?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    header?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proxyId?: StringFieldUpdateOperationsInput | string
  }

  export type SolicitudesCreateManyInput = {
    id?: string
    ipPublica?: string | null
    status: string
    header?: string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    proxyId: string
  }

  export type SolicitudesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipPublica?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    header?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipPublica?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    header?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    proxyId?: StringFieldUpdateOperationsInput | string
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

  export type SolicitudesListRelationFilter = {
    every?: SolicitudesWhereInput
    some?: SolicitudesWhereInput
    none?: SolicitudesWhereInput
  }

  export type SolicitudesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProxyCountOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    createdAt?: SortOrder
  }

  export type ProxyAvgOrderByAggregateInput = {
    port?: SortOrder
  }

  export type ProxyMaxOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    createdAt?: SortOrder
  }

  export type ProxyMinOrderByAggregateInput = {
    id?: SortOrder
    host?: SortOrder
    port?: SortOrder
    protocol?: SortOrder
    createdAt?: SortOrder
  }

  export type ProxySumOrderByAggregateInput = {
    port?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProxyScalarRelationFilter = {
    is?: ProxyWhereInput
    isNot?: ProxyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SolicitudesCountOrderByAggregateInput = {
    id?: SortOrder
    ipPublica?: SortOrder
    status?: SortOrder
    header?: SortOrder
    body?: SortOrder
    createdAt?: SortOrder
    proxyId?: SortOrder
  }

  export type SolicitudesMaxOrderByAggregateInput = {
    id?: SortOrder
    ipPublica?: SortOrder
    status?: SortOrder
    header?: SortOrder
    createdAt?: SortOrder
    proxyId?: SortOrder
  }

  export type SolicitudesMinOrderByAggregateInput = {
    id?: SortOrder
    ipPublica?: SortOrder
    status?: SortOrder
    header?: SortOrder
    createdAt?: SortOrder
    proxyId?: SortOrder
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
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type SolicitudesCreateNestedManyWithoutProxyInput = {
    create?: XOR<SolicitudesCreateWithoutProxyInput, SolicitudesUncheckedCreateWithoutProxyInput> | SolicitudesCreateWithoutProxyInput[] | SolicitudesUncheckedCreateWithoutProxyInput[]
    connectOrCreate?: SolicitudesCreateOrConnectWithoutProxyInput | SolicitudesCreateOrConnectWithoutProxyInput[]
    createMany?: SolicitudesCreateManyProxyInputEnvelope
    connect?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
  }

  export type SolicitudesUncheckedCreateNestedManyWithoutProxyInput = {
    create?: XOR<SolicitudesCreateWithoutProxyInput, SolicitudesUncheckedCreateWithoutProxyInput> | SolicitudesCreateWithoutProxyInput[] | SolicitudesUncheckedCreateWithoutProxyInput[]
    connectOrCreate?: SolicitudesCreateOrConnectWithoutProxyInput | SolicitudesCreateOrConnectWithoutProxyInput[]
    createMany?: SolicitudesCreateManyProxyInputEnvelope
    connect?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SolicitudesUpdateManyWithoutProxyNestedInput = {
    create?: XOR<SolicitudesCreateWithoutProxyInput, SolicitudesUncheckedCreateWithoutProxyInput> | SolicitudesCreateWithoutProxyInput[] | SolicitudesUncheckedCreateWithoutProxyInput[]
    connectOrCreate?: SolicitudesCreateOrConnectWithoutProxyInput | SolicitudesCreateOrConnectWithoutProxyInput[]
    upsert?: SolicitudesUpsertWithWhereUniqueWithoutProxyInput | SolicitudesUpsertWithWhereUniqueWithoutProxyInput[]
    createMany?: SolicitudesCreateManyProxyInputEnvelope
    set?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
    disconnect?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
    delete?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
    connect?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
    update?: SolicitudesUpdateWithWhereUniqueWithoutProxyInput | SolicitudesUpdateWithWhereUniqueWithoutProxyInput[]
    updateMany?: SolicitudesUpdateManyWithWhereWithoutProxyInput | SolicitudesUpdateManyWithWhereWithoutProxyInput[]
    deleteMany?: SolicitudesScalarWhereInput | SolicitudesScalarWhereInput[]
  }

  export type SolicitudesUncheckedUpdateManyWithoutProxyNestedInput = {
    create?: XOR<SolicitudesCreateWithoutProxyInput, SolicitudesUncheckedCreateWithoutProxyInput> | SolicitudesCreateWithoutProxyInput[] | SolicitudesUncheckedCreateWithoutProxyInput[]
    connectOrCreate?: SolicitudesCreateOrConnectWithoutProxyInput | SolicitudesCreateOrConnectWithoutProxyInput[]
    upsert?: SolicitudesUpsertWithWhereUniqueWithoutProxyInput | SolicitudesUpsertWithWhereUniqueWithoutProxyInput[]
    createMany?: SolicitudesCreateManyProxyInputEnvelope
    set?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
    disconnect?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
    delete?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
    connect?: SolicitudesWhereUniqueInput | SolicitudesWhereUniqueInput[]
    update?: SolicitudesUpdateWithWhereUniqueWithoutProxyInput | SolicitudesUpdateWithWhereUniqueWithoutProxyInput[]
    updateMany?: SolicitudesUpdateManyWithWhereWithoutProxyInput | SolicitudesUpdateManyWithWhereWithoutProxyInput[]
    deleteMany?: SolicitudesScalarWhereInput | SolicitudesScalarWhereInput[]
  }

  export type ProxyCreateNestedOneWithoutSolicitudesInput = {
    create?: XOR<ProxyCreateWithoutSolicitudesInput, ProxyUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: ProxyCreateOrConnectWithoutSolicitudesInput
    connect?: ProxyWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProxyUpdateOneRequiredWithoutSolicitudesNestedInput = {
    create?: XOR<ProxyCreateWithoutSolicitudesInput, ProxyUncheckedCreateWithoutSolicitudesInput>
    connectOrCreate?: ProxyCreateOrConnectWithoutSolicitudesInput
    upsert?: ProxyUpsertWithoutSolicitudesInput
    connect?: ProxyWhereUniqueInput
    update?: XOR<XOR<ProxyUpdateToOneWithWhereWithoutSolicitudesInput, ProxyUpdateWithoutSolicitudesInput>, ProxyUncheckedUpdateWithoutSolicitudesInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SolicitudesCreateWithoutProxyInput = {
    id?: string
    ipPublica?: string | null
    status: string
    header?: string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SolicitudesUncheckedCreateWithoutProxyInput = {
    id?: string
    ipPublica?: string | null
    status: string
    header?: string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SolicitudesCreateOrConnectWithoutProxyInput = {
    where: SolicitudesWhereUniqueInput
    create: XOR<SolicitudesCreateWithoutProxyInput, SolicitudesUncheckedCreateWithoutProxyInput>
  }

  export type SolicitudesCreateManyProxyInputEnvelope = {
    data: SolicitudesCreateManyProxyInput | SolicitudesCreateManyProxyInput[]
    skipDuplicates?: boolean
  }

  export type SolicitudesUpsertWithWhereUniqueWithoutProxyInput = {
    where: SolicitudesWhereUniqueInput
    update: XOR<SolicitudesUpdateWithoutProxyInput, SolicitudesUncheckedUpdateWithoutProxyInput>
    create: XOR<SolicitudesCreateWithoutProxyInput, SolicitudesUncheckedCreateWithoutProxyInput>
  }

  export type SolicitudesUpdateWithWhereUniqueWithoutProxyInput = {
    where: SolicitudesWhereUniqueInput
    data: XOR<SolicitudesUpdateWithoutProxyInput, SolicitudesUncheckedUpdateWithoutProxyInput>
  }

  export type SolicitudesUpdateManyWithWhereWithoutProxyInput = {
    where: SolicitudesScalarWhereInput
    data: XOR<SolicitudesUpdateManyMutationInput, SolicitudesUncheckedUpdateManyWithoutProxyInput>
  }

  export type SolicitudesScalarWhereInput = {
    AND?: SolicitudesScalarWhereInput | SolicitudesScalarWhereInput[]
    OR?: SolicitudesScalarWhereInput[]
    NOT?: SolicitudesScalarWhereInput | SolicitudesScalarWhereInput[]
    id?: StringFilter<"Solicitudes"> | string
    ipPublica?: StringNullableFilter<"Solicitudes"> | string | null
    status?: StringFilter<"Solicitudes"> | string
    header?: StringNullableFilter<"Solicitudes"> | string | null
    body?: JsonNullableFilter<"Solicitudes">
    createdAt?: DateTimeFilter<"Solicitudes"> | Date | string
    proxyId?: StringFilter<"Solicitudes"> | string
  }

  export type ProxyCreateWithoutSolicitudesInput = {
    id?: string
    host: string
    port: number
    protocol: string
    createdAt?: Date | string
  }

  export type ProxyUncheckedCreateWithoutSolicitudesInput = {
    id?: string
    host: string
    port: number
    protocol: string
    createdAt?: Date | string
  }

  export type ProxyCreateOrConnectWithoutSolicitudesInput = {
    where: ProxyWhereUniqueInput
    create: XOR<ProxyCreateWithoutSolicitudesInput, ProxyUncheckedCreateWithoutSolicitudesInput>
  }

  export type ProxyUpsertWithoutSolicitudesInput = {
    update: XOR<ProxyUpdateWithoutSolicitudesInput, ProxyUncheckedUpdateWithoutSolicitudesInput>
    create: XOR<ProxyCreateWithoutSolicitudesInput, ProxyUncheckedCreateWithoutSolicitudesInput>
    where?: ProxyWhereInput
  }

  export type ProxyUpdateToOneWithWhereWithoutSolicitudesInput = {
    where?: ProxyWhereInput
    data: XOR<ProxyUpdateWithoutSolicitudesInput, ProxyUncheckedUpdateWithoutSolicitudesInput>
  }

  export type ProxyUpdateWithoutSolicitudesInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProxyUncheckedUpdateWithoutSolicitudesInput = {
    id?: StringFieldUpdateOperationsInput | string
    host?: StringFieldUpdateOperationsInput | string
    port?: IntFieldUpdateOperationsInput | number
    protocol?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudesCreateManyProxyInput = {
    id?: string
    ipPublica?: string | null
    status: string
    header?: string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type SolicitudesUpdateWithoutProxyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipPublica?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    header?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudesUncheckedUpdateWithoutProxyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipPublica?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    header?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SolicitudesUncheckedUpdateManyWithoutProxyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ipPublica?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    header?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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