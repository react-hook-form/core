## API Report File for "@hookform/core"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

// @public (undocumented)
function append<T>(data: T[], value: T | T[]): T[];
export { append }
export { append as appendAt }

// @public (undocumented)
export const appendErrors: (name: InternalFieldName, validateAllFieldCriteria: boolean, errors: InternalFieldErrors, type: string, message: ValidateResult) => {};

// @public
export type ArrayKey = number;

// Warning: (ae-forgotten-export) The symbol "ArrayPathInternal" needs to be exported by the entry point index.d.ts
//
// @public
export type ArrayPath<T> = T extends any ? ArrayPathInternal<T> : never;

// @public
export type AsKey<T> = Extract<T, Key>;

// @public
export type AsPathTuple<T> = Extract<T, PathTuple>;

// @public (undocumented)
export type BatchFieldArrayUpdate = <T extends Function, TFieldValues extends FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>>(name: InternalFieldName, updatedFieldArrayValues?: Partial<FieldArray<TFieldValues, TFieldArrayName>>[], method?: T, args?: Partial<{
    argA: unknown;
    argB: unknown;
}>, shouldSetValue?: boolean, shouldUpdateFieldsAndErrors?: boolean) => void;

// Warning: (ae-forgotten-export) The symbol "FileList$1" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "File$1" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type BrowserNativeObject = Date | FileList$1 | File$1;

// @public (undocumented)
export type ChangeHandler = (event: {
    target: any;
    type?: any;
}) => Promise<void | boolean>;

// @public
export type CheckKeyConstraint<T, K extends Key, U> = K extends any ? EvaluateKey<T, K> extends U ? K : never : never;

// @public (undocumented)
export function cloneObject<T>(data: T): T;

// @public
export type ContainsIndexable<T> = IsNever<Extract<T, ReadonlyArray<any>>> extends true ? false : true;

// @public (undocumented)
export type Control<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
    _subjects: Subjects<TFieldValues>;
    _removeUnmounted: Noop;
    _focusError: Noop;
    _names: Names;
    _stateFlags: {
        mount: boolean;
        action: boolean;
        watch: boolean;
    };
    _reset: UseFormReset<TFieldValues>;
    _options: UseFormProps<TFieldValues, TContext>;
    _getDirty: GetIsDirty;
    _formState: FormState<TFieldValues>;
    _updateValid: (shouldUpdateValid?: boolean) => void;
    _updateFormState: (formState: Partial<FormState<TFieldValues>>) => void;
    _fields: FieldRefs;
    _formValues: FieldValues;
    _proxyFormState: ReadFormState;
    _defaultValues: Partial<DefaultValues<TFieldValues>>;
    _getWatch: WatchInternal<TFieldValues>;
    _updateFieldArray: BatchFieldArrayUpdate;
    _getFieldArray: <TFieldArrayValues>(name: InternalFieldName) => Partial<TFieldArrayValues>[];
    _executeSchema: (names: InternalFieldName[]) => Promise<{
        errors: FieldErrors;
    }>;
    register: UseFormRegister<TFieldValues>;
    unregister: UseFormUnregister<TFieldValues>;
    getFieldState: UseFormGetFieldState<TFieldValues>;
};

// @public (undocumented)
export type ControllerFieldState = {
    invalid: boolean;
    isTouched: boolean;
    isDirty: boolean;
    error?: FieldError;
};

// @public
export type ControllerProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    render: ({ field, fieldState, formState, }: {
        field: ControllerRenderProps<TFieldValues, TName>;
        fieldState: ControllerFieldState;
        formState: UseFormStateReturn<TFieldValues>;
    }) => React.ReactElement;
} & UseControllerProps<TFieldValues, TName>;

// @public (undocumented)
export type ControllerRenderProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    onChange: (...event: any[]) => void;
    onBlur: Noop;
    value: FieldPathValue<TFieldValues, TName>;
    name: TName;
    ref: RefCallBack;
};

// @public (undocumented)
export const convertToArrayPayload: <T>(value: T) => (T & any[]) | T[];

// @public (undocumented)
export function createFormControl<TFieldValues extends FieldValues = FieldValues, TContext = any>(props: Partial<{
    mode: keyof ValidationMode;
    reValidateMode: "onBlur" | "onChange" | "onSubmit";
    defaultValues: DeepPartial<TFieldValues> | ((payload?: unknown) => Promise<TFieldValues>);
    values: TFieldValues;
    resetOptions: Partial<{
        keepDirtyValues: boolean;
        keepErrors: boolean;
        keepDirty: boolean;
        keepValues: boolean;
        keepDefaultValues: boolean;
        keepIsSubmitted: boolean;
        keepTouched: boolean;
        keepIsValid: boolean;
        keepSubmitCount: boolean;
    }> | undefined;
    resolver: Resolver<TFieldValues, TContext>;
    context: TContext;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    criteriaMode: CriteriaMode;
    delayError: number;
}> | undefined, flushRootRender: () => void): Omit<UseFormReturn<TFieldValues, TContext>, 'formState'>;

// @public (undocumented)
export type CriteriaMode = 'firstError' | 'all';

// @public (undocumented)
export type CustomElement<TFieldValues extends FieldValues> = {
    name: FieldName<TFieldValues>;
    type?: string;
    value?: any;
    disabled?: boolean;
    checked?: boolean;
    options?: HTMLOptionsCollection;
    files?: FileList | null;
    focus?: Noop;
};

// @public (undocumented)
export function deepEqual(object1: any, object2: any): boolean;

// @public (undocumented)
export type DeepMap<T, TValue> = IsAny<T> extends true ? any : T extends BrowserNativeObject | NestedValue ? TValue : T extends object ? {
    [K in keyof T]: DeepMap<NonUndefined<T[K]>, TValue>;
} : TValue;

// @public (undocumented)
export type DeepPartial<T> = T extends BrowserNativeObject | NestedValue ? T : {
    [K in keyof T]?: DeepPartial<T[K]>;
};

// @public (undocumented)
export type DeepPartialSkipArrayKey<T> = T extends BrowserNativeObject | NestedValue ? T : T extends ReadonlyArray<any> ? {
    [K in keyof T]: DeepPartialSkipArrayKey<T[K]>;
} : {
    [K in keyof T]?: DeepPartialSkipArrayKey<T[K]>;
};

// @public (undocumented)
export type DeepRequired<T> = T extends BrowserNativeObject | Blob ? T : {
    [K in keyof T]-?: NonNullable<DeepRequired<T[K]>>;
};

// @public (undocumented)
export type DefaultValues<TFieldValues> = DeepPartial<TFieldValues>;

// @public (undocumented)
export type DelayCallback = (wait: number) => void;

// @public (undocumented)
export type EmptyObject = {
    [K in string | number]: never;
};

// @public (undocumented)
export type ErrorOption = {
    message?: Message;
    type?: LiteralUnion<keyof RegisterOptions, string>;
    types?: MultipleFieldErrors;
};

// Warning: (ae-forgotten-export) The symbol "TryAccess" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "TryAccessArray" needs to be exported by the entry point index.d.ts
// Warning: (ae-forgotten-export) The symbol "MapKeys" needs to be exported by the entry point index.d.ts
//
// @public
export type EvaluateKey<T, K extends Key> = T extends ReadonlyArray<any> ? IsTuple<T> extends true ? TryAccess<T, K> : TryAccessArray<T, K> : TryAccess<MapKeys<T>, K>;

// @public
export type EvaluatePath<T, PT extends PathTuple> = PT extends [
infer K,
...infer R
] ? EvaluatePath<EvaluateKey<T, AsKey<K>>, AsPathTuple<R>> : T;

// @public (undocumented)
export const EVENTS: {
    BLUR: string;
    FOCUS_OUT: string;
    CHANGE: string;
};

// @public (undocumented)
export type EventType = 'focus' | 'blur' | 'change' | 'changeText' | 'valueChange' | 'contentSizeChange' | 'endEditing' | 'keyPress' | 'submitEditing' | 'layout' | 'selectionChange' | 'longPress' | 'press' | 'pressIn' | 'pressOut' | 'momentumScrollBegin' | 'momentumScrollEnd' | 'scroll' | 'scrollBeginDrag' | 'scrollEndDrag' | 'load' | 'error' | 'progress' | 'custom';

// @public (undocumented)
export type Field = {
    _f: {
        ref: Ref;
        name: InternalFieldName;
        refs?: HTMLInputElement[];
        mount?: boolean;
    } & RegisterOptions;
};

// @public (undocumented)
export type FieldArray<TFieldValues extends FieldValues = FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>> = FieldArrayPathValue<TFieldValues, TFieldArrayName> extends ReadonlyArray<infer U> | null | undefined ? U : never;

// @public
export type FieldArrayMethodProps = {
    shouldFocus?: boolean;
    focusIndex?: number;
    focusName?: string;
};

// @public
export type FieldArrayPath<TFieldValues extends FieldValues> = ArrayPath<TFieldValues>;

// @public
export type FieldArrayPathValue<TFieldValues extends FieldValues, TFieldArrayPath extends FieldArrayPath<TFieldValues>> = PathValue<TFieldValues, TFieldArrayPath>;

// @public
export type FieldArrayWithId<TFieldValues extends FieldValues = FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>, TKeyName extends string = 'id'> = FieldArray<TFieldValues, TFieldArrayName> & Record<TKeyName, string>;

// @public (undocumented)
export type FieldElement<TFieldValues extends FieldValues = FieldValues> = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | CustomElement<TFieldValues>;

// @public (undocumented)
export type FieldError = {
    type: LiteralUnion<keyof RegisterOptions, string>;
    root?: FieldError;
    ref?: Ref;
    types?: MultipleFieldErrors;
    message?: Message;
};

// @public (undocumented)
export type FieldErrors<T extends FieldValues = FieldValues> = Partial<FieldValues extends IsAny<FieldValues> ? any : FieldErrorsImpl<DeepRequired<T>>> & {
    root?: Record<string, GlobalError> & GlobalError;
};

// @public (undocumented)
export type FieldErrorsImpl<T extends FieldValues = FieldValues> = {
    [K in keyof T]?: T[K] extends BrowserNativeObject | Blob ? FieldError : K extends 'root' | `root.${string}` ? GlobalError : T[K] extends object ? Merge<FieldError, FieldErrorsImpl<T[K]>> : FieldError;
};

// @public (undocumented)
export type FieldName<TFieldValues extends FieldValues> = IsFlatObject<TFieldValues> extends true ? Extract<keyof TFieldValues, string> : string;

// @public (undocumented)
export type FieldNamesMarkedBoolean<TFieldValues extends FieldValues> = DeepMap<DeepPartial<TFieldValues>, boolean>;

// @public
export type FieldPath<TFieldValues extends FieldValues> = Path<TFieldValues>;

// @public
export type FieldPathByValue<TFieldValues extends FieldValues, TValue> = {
    [Key in FieldPath<TFieldValues>]: FieldPathValue<TFieldValues, Key> extends TValue ? Key : never;
}[FieldPath<TFieldValues>];

// @public
export type FieldPathValue<TFieldValues extends FieldValues, TFieldPath extends FieldPath<TFieldValues>> = PathValue<TFieldValues, TFieldPath>;

// @public
export type FieldPathValues<TFieldValues extends FieldValues, TPath extends FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[]> = {} & {
    [K in keyof TPath]: FieldPathValue<TFieldValues, TPath[K] & FieldPath<TFieldValues>>;
};

// @public (undocumented)
export type FieldRefs = Partial<Record<InternalFieldName, Field>>;

// @public (undocumented)
export type FieldValue<TFieldValues extends FieldValues> = TFieldValues[InternalFieldName];

// @public (undocumented)
export type FieldValues = Record<string, any>;

// @public (undocumented)
export const fillEmptyArray: <T>(value: T | T[]) => undefined[] | undefined;

// @public (undocumented)
export const focusFieldBy: (fields: FieldRefs, callback: (name?: string) => boolean, fieldsNames?: Set<InternalFieldName> | InternalFieldName[]) => void;

// @public (undocumented)
export type FormProviderProps<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
    children: React.ReactNode | React.ReactNode[];
} & UseFormReturn<TFieldValues, TContext>;

// @public (undocumented)
export type FormState<TFieldValues extends FieldValues> = {
    isDirty: boolean;
    isLoading: boolean;
    isSubmitted: boolean;
    isSubmitSuccessful: boolean;
    isSubmitting: boolean;
    isValidating: boolean;
    isValid: boolean;
    submitCount: number;
    defaultValues?: undefined | Readonly<DeepPartial<TFieldValues>>;
    dirtyFields: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>;
    touchedFields: Partial<Readonly<FieldNamesMarkedBoolean<TFieldValues>>>;
    errors: FieldErrors<TFieldValues>;
};

// @public (undocumented)
export type FormStateProxy<TFieldValues extends FieldValues = FieldValues> = {
    isDirty: boolean;
    isValidating: boolean;
    dirtyFields: FieldNamesMarkedBoolean<TFieldValues>;
    touchedFields: FieldNamesMarkedBoolean<TFieldValues>;
    errors: boolean;
    isValid: boolean;
};

// Warning: (ae-forgotten-export) The symbol "Subject" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export type FormStateSubjectRef<TFieldValues extends FieldValues> = Subject<Partial<FormState<TFieldValues>> & {
    name?: InternalFieldName;
}>;

// @public (undocumented)
export const generateId: () => string;

// @public (undocumented)
export const generateWatchOutput: <T>(names: string | string[] | undefined, _names: Names, formValues?: FieldValues, isGlobal?: boolean, defaultValue?: unknown) => any;

// @public (undocumented)
export const get: <T>(obj: T, path: string, defaultValue?: unknown) => any;

// @public (undocumented)
export const getEventValue: (event: unknown) => any;

// @public (undocumented)
export const getFocusFieldName: (name: InternalFieldName, index: number, options?: FieldArrayMethodProps) => string;

// @public (undocumented)
export type GetIsDirty = <TName extends InternalFieldName, TData>(name?: TName, data?: TData) => boolean;

// @public (undocumented)
export const getProxyFormState: <TFieldValues extends FieldValues, TContext = any>(formState: FormState<TFieldValues>, control: Control<TFieldValues, TContext>, localProxyFormState?: ReadFormState, isRoot?: boolean) => FormState<TFieldValues>;

// @public (undocumented)
export const getValidationModes: (mode?: Mode) => {
    isOnSubmit: boolean;
    isOnBlur: boolean;
    isOnChange: boolean;
    isOnAll: boolean;
    isOnTouch: boolean;
};

// @public (undocumented)
export type GlobalError = Partial<{
    type: string | number;
    message: string;
}>;

// @public
export type HasKey<T, K extends Key> = IsNever<Exclude<K, Keys<T>>>;

// @public
export type HasPath<T, PT extends PathTuple> = ValidPathPrefix<T, PT> extends PT ? true : false;

// @public (undocumented)
export const INPUT_VALIDATION_RULES: {
    max: string;
    min: string;
    maxLength: string;
    minLength: string;
    pattern: string;
    required: string;
    validate: string;
};

// @public (undocumented)
export function insertAt<T>(data: T[], index: number): (T | undefined)[];

// @public (undocumented)
export function insertAt<T>(data: T[], index: number, value: T | T[]): T[];

// @public (undocumented)
export type InternalFieldErrors = Partial<Record<InternalFieldName, FieldError>>;

// @public (undocumented)
export type InternalFieldName = string;

// @public (undocumented)
export type InternalNameSet = Set<InternalFieldName>;

// @public
export type IsAny<T> = 0 extends 1 & T ? true : false;

// @public (undocumented)
export const isEmptyObject: (value: unknown) => value is EmptyObject;

// @public
export type IsEqual<T1, T2> = T1 extends T2 ? (<G>() => G extends T1 ? 1 : 2) extends <G>() => G extends T2 ? 1 : 2 ? true : false : false;

// @public (undocumented)
export type IsFlatObject<T extends object> = Extract<Exclude<T[keyof T], NestedValue | Date | FileList$1>, any[] | object> extends never ? true : false;

// @public (undocumented)
export const isFunction: (value: unknown) => value is Function;

// @public
export type IsNever<T> = [T] extends [never] ? true : false;

// @public
export type IsTuple<T extends ReadonlyArray<any>> = number extends T['length'] ? false : true;

// @public (undocumented)
export const isWatched: (name: InternalFieldName, _names: Names, isBlurEvent?: boolean) => boolean;

// Warning: (ae-forgotten-export) The symbol "JoinPathTupleImpl" needs to be exported by the entry point index.d.ts
//
// @public
export type JoinPathTuple<PT extends PathTuple> = PT extends [
infer K,
...infer R
] ? JoinPathTupleImpl<AsPathTuple<R>, AsKey<K>> : never;

// @public (undocumented)
export type KeepStateOptions = Partial<{
    keepDirtyValues: boolean;
    keepErrors: boolean;
    keepDirty: boolean;
    keepValues: boolean;
    keepDefaultValues: boolean;
    keepIsSubmitted: boolean;
    keepTouched: boolean;
    keepIsValid: boolean;
    keepSubmitCount: boolean;
}>;

// @public
export type Key = string;

// Warning: (ae-forgotten-export) The symbol "KeysImpl" needs to be exported by the entry point index.d.ts
//
// @public
export type Keys<T, U = unknown> = IsAny<T> extends true ? Key : IsNever<T> extends true ? Key : IsNever<NonNullable<T>> extends true ? never : CheckKeyConstraint<T, KeysImpl<NonNullable<T>>, U>;

// @public (undocumented)
export type LiteralUnion<T extends U, U extends Primitive> = T | (U & {
    _?: never;
});

// @public (undocumented)
export type Merge<A, B> = {
    [K in keyof A | keyof B]?: K extends keyof A & keyof B ? [A[K], B[K]] extends [object, object] ? Merge<A[K], B[K]> : A[K] | B[K] : K extends keyof A ? A[K] : K extends keyof B ? B[K] : never;
};

// @public (undocumented)
export type Message = string;

// @public (undocumented)
export type Mode = keyof ValidationMode;

// @public (undocumented)
export const moveArrayAt: <T>(data: (T | undefined)[], from: number, to: number) => (T | undefined)[];

// @public (undocumented)
export type MultipleFieldErrors = {
    [K in keyof RegisterOptions]?: ValidateResult;
} & {
    [key: string]: ValidateResult;
};

// @public (undocumented)
export type Names = {
    mount: InternalNameSet;
    unMount: InternalNameSet;
    array: InternalNameSet;
    watch: InternalNameSet;
    focus?: InternalFieldName;
    watchAll?: boolean;
};

// @public (undocumented)
export type NativeFieldValue = string | number | boolean | null | undefined | unknown[];

// @public @deprecated (undocumented)
export type NestedValue<TValue extends object = object> = {
    [$NestedValue]: never;
} & TValue;

// @public (undocumented)
export type NonUndefined<T> = T extends undefined ? never : T;

// @public (undocumented)
export type Noop = () => void;

// Warning: (ae-forgotten-export) The symbol "NumericObjectKeys" needs to be exported by the entry point index.d.ts
//
// @public
export type NumericKeys<T extends Traversable> = UnionToIntersection<T extends ReadonlyArray<any> ? IsTuple<T> extends true ? [TupleKeys<T>] : [ToKey<ArrayKey>] : [NumericObjectKeys<T>]>[never];

// @public
export type ObjectKeys<T extends Traversable> = Exclude<ToKey<keyof T>, `${string}.${string}` | ''>;

// Warning: (ae-forgotten-export) The symbol "PathInternal" needs to be exported by the entry point index.d.ts
//
// @public
export type Path<T> = T extends any ? PathInternal<T> : never;

// @public
export type PathString = string;

// @public
export type PathTuple = Key[];

// @public
export type PathValue<T, P extends Path<T> | ArrayPath<T>> = T extends any ? P extends `${infer K}.${infer R}` ? K extends keyof T ? R extends Path<T[K]> ? PathValue<T[K], R> : never : K extends `${ArrayKey}` ? T extends ReadonlyArray<infer V> ? PathValue<V, R & Path<V>> : never : never : P extends keyof T ? T[P] : P extends `${ArrayKey}` ? T extends ReadonlyArray<infer V> ? V : never : never : never;

// @public (undocumented)
export function prependAt<T>(data: T[], value: T | T[]): T[];

// @public (undocumented)
export type Primitive = null | undefined | string | number | boolean | symbol | bigint;

// @public (undocumented)
export type ReadFormState = {
    [K in keyof FormStateProxy]: boolean | 'all';
};

// @public (undocumented)
export type Ref = FieldElement;

// @public (undocumented)
export type RefCallBack = (instance: any) => void;

// @public (undocumented)
export type RegisterOptions<TFieldValues extends FieldValues = FieldValues, TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = Partial<{
    required: Message | ValidationRule<boolean>;
    min: ValidationRule<number | string>;
    max: ValidationRule<number | string>;
    maxLength: ValidationRule<number>;
    minLength: ValidationRule<number>;
    validate: Validate<FieldPathValue<TFieldValues, TFieldName>, TFieldValues> | Record<string, Validate<FieldPathValue<TFieldValues, TFieldName>, TFieldValues>>;
    value: FieldPathValue<TFieldValues, TFieldName>;
    setValueAs: (value: any) => any;
    shouldUnregister?: boolean;
    onChange?: (event: any) => void;
    onBlur?: (event: any) => void;
    disabled: boolean;
    deps: InternalFieldName | InternalFieldName[];
}> & ({
    pattern?: ValidationRule<RegExp>;
    valueAsNumber?: false;
    valueAsDate?: false;
} | {
    pattern?: undefined;
    valueAsNumber?: false;
    valueAsDate?: true;
} | {
    pattern?: undefined;
    valueAsNumber?: true;
    valueAsDate?: false;
});

// @public (undocumented)
export const removeArrayAt: <T>(data: T[], index?: number | number[]) => T[];

// @public (undocumented)
export type Resolver<TFieldValues extends FieldValues = FieldValues, TContext = any> = (values: TFieldValues, context: TContext | undefined, options: ResolverOptions<TFieldValues>) => Promise<ResolverResult<TFieldValues>> | ResolverResult<TFieldValues>;

// @public (undocumented)
export type ResolverError<TFieldValues extends FieldValues = FieldValues> = {
    values: {};
    errors: FieldErrors<TFieldValues>;
};

// @public (undocumented)
export interface ResolverOptions<TFieldValues extends FieldValues> {
    // (undocumented)
    criteriaMode?: CriteriaMode;
    // (undocumented)
    fields: Record<InternalFieldName, Field['_f']>;
    // (undocumented)
    names?: FieldName<TFieldValues>[];
    // (undocumented)
    shouldUseNativeValidation: boolean | undefined;
}

// @public (undocumented)
export type ResolverResult<TFieldValues extends FieldValues = FieldValues> = ResolverSuccess<TFieldValues> | ResolverError<TFieldValues>;

// @public (undocumented)
export type ResolverSuccess<TFieldValues extends FieldValues = FieldValues> = {
    values: TFieldValues;
    errors: {};
};

// @public (undocumented)
export function set(object: FieldValues, path: string, value?: unknown): FieldValues;

// @public (undocumented)
export type SetFieldValue<TFieldValues extends FieldValues> = FieldValue<TFieldValues>;

// @public (undocumented)
export type SetFocusOptions = Partial<{
    shouldSelect: boolean;
}>;

// @public (undocumented)
export type SetValueConfig = Partial<{
    shouldValidate: boolean;
    shouldDirty: boolean;
    shouldTouch: boolean;
}>;

// @public (undocumented)
export const shouldRenderFormState: <T extends FieldValues, K extends ReadFormState>(formStateData: Partial<FormState<T>> & {
    name?: string | undefined;
}, _proxyFormState: K, updateFormState: (formState: Partial<FormState<T>>) => void, isRoot?: boolean) => string | true | undefined;

// @public (undocumented)
export const shouldSubscribeByName: <T extends string | string[] | undefined>(name?: T | undefined, signalName?: string, exact?: boolean) => boolean;

// Warning: (ae-forgotten-export) The symbol "SplitPathStringImpl" needs to be exported by the entry point index.d.ts
//
// @public
export type SplitPathString<PS extends PathString> = SplitPathStringImpl<PS, [
]>;

// @public (undocumented)
export type Subjects<TFieldValues extends FieldValues = FieldValues> = {
    watch: Subject<{
        name?: InternalFieldName;
        type?: EventType;
        values?: FieldValues;
    }>;
    array: Subject<{
        name?: InternalFieldName;
        values?: FieldValues;
    }>;
    state: FormStateSubjectRef<TFieldValues>;
};

// @public (undocumented)
export type SubmitErrorHandler<TFieldValues extends FieldValues> = (errors: FieldErrors<TFieldValues>, event?: React.BaseSyntheticEvent) => any | Promise<any>;

// @public (undocumented)
export type SubmitHandler<TFieldValues extends FieldValues> = (data: TFieldValues, event?: React.BaseSyntheticEvent) => any | Promise<any>;

// @public (undocumented)
export const swapArrayAt: <T>(data: T[], indexA: number, indexB: number) => void;

// @public
export type ToKey<T> = T extends ArrayKey ? `${T}` : AsKey<T>;

// @public
export type Traversable = object;

// @public (undocumented)
export type TriggerConfig = Partial<{
    shouldFocus: boolean;
}>;

// @public
export type TupleKeys<T extends ReadonlyArray<any>> = Exclude<keyof T, keyof any[]>;

// @public
export type UnionToIntersection<U> = (U extends any ? (_: U) => any : never) extends (_: infer I) => any ? I : never;

// @public @deprecated (undocumented)
export type UnpackNestedValue<T> = T extends NestedValue<infer U> ? U : T extends Date | FileList | File | Blob ? T : T extends object ? {
    [K in keyof T]: UnpackNestedValue<T[K]>;
} : T;

// @public (undocumented)
export function unset(object: any, path: string | (string | number)[]): any;

// @public (undocumented)
export const updateAt: <T>(fieldValues: T[], index: number, value: T) => T[];

// @public (undocumented)
export const updateFieldArrayRootError: <T extends FieldValues = FieldValues>(errors: FieldErrors<T>, error: Partial<Record<string, FieldError>>, name: InternalFieldName) => FieldErrors<T>;

// @public (undocumented)
export type UseControllerProps<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    name: TName;
    rules?: Omit<RegisterOptions<TFieldValues, TName>, 'valueAsNumber' | 'valueAsDate' | 'setValueAs' | 'disabled'>;
    shouldUnregister?: boolean;
    defaultValue?: FieldPathValue<TFieldValues, TName>;
    control?: Control<TFieldValues>;
};

// @public (undocumented)
export type UseControllerReturn<TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>> = {
    field: ControllerRenderProps<TFieldValues, TName>;
    formState: UseFormStateReturn<TFieldValues>;
    fieldState: ControllerFieldState;
};

// @public
export type UseFieldArrayAppend<TFieldValues extends FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>> = (value: FieldArray<TFieldValues, TFieldArrayName> | FieldArray<TFieldValues, TFieldArrayName>[], options?: FieldArrayMethodProps) => void;

// @public
export type UseFieldArrayInsert<TFieldValues extends FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>> = (index: number, value: FieldArray<TFieldValues, TFieldArrayName> | FieldArray<TFieldValues, TFieldArrayName>[], options?: FieldArrayMethodProps) => void;

// @public
export type UseFieldArrayMove = (indexA: number, indexB: number) => void;

// @public
export type UseFieldArrayPrepend<TFieldValues extends FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>> = (value: FieldArray<TFieldValues, TFieldArrayName> | FieldArray<TFieldValues, TFieldArrayName>[], options?: FieldArrayMethodProps) => void;

// @public (undocumented)
export type UseFieldArrayProps<TFieldValues extends FieldValues = FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>, TKeyName extends string = 'id'> = {
    name: TFieldArrayName;
    keyName?: TKeyName;
    control?: Control<TFieldValues>;
    rules?: {
        validate?: Validate<FieldArray<TFieldValues, TFieldArrayName>[], TFieldValues> | Record<string, Validate<FieldArray<TFieldValues, TFieldArrayName>[], TFieldValues>>;
    } & Pick<RegisterOptions<TFieldValues>, 'maxLength' | 'minLength' | 'required'>;
    shouldUnregister?: boolean;
};

// @public
export type UseFieldArrayRemove = (index?: number | number[]) => void;

// @public
export type UseFieldArrayReplace<TFieldValues extends FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>> = (value: FieldArray<TFieldValues, TFieldArrayName> | FieldArray<TFieldValues, TFieldArrayName>[]) => void;

// @public (undocumented)
export type UseFieldArrayReturn<TFieldValues extends FieldValues = FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>, TKeyName extends string = 'id'> = {
    swap: UseFieldArraySwap;
    move: UseFieldArrayMove;
    prepend: UseFieldArrayPrepend<TFieldValues, TFieldArrayName>;
    append: UseFieldArrayAppend<TFieldValues, TFieldArrayName>;
    remove: UseFieldArrayRemove;
    insert: UseFieldArrayInsert<TFieldValues, TFieldArrayName>;
    update: UseFieldArrayUpdate<TFieldValues, TFieldArrayName>;
    replace: UseFieldArrayReplace<TFieldValues, TFieldArrayName>;
    fields: FieldArrayWithId<TFieldValues, TFieldArrayName, TKeyName>[];
};

// @public
export type UseFieldArraySwap = (indexA: number, indexB: number) => void;

// @public
export type UseFieldArrayUpdate<TFieldValues extends FieldValues, TFieldArrayName extends FieldArrayPath<TFieldValues> = FieldArrayPath<TFieldValues>> = (index: number, value: FieldArray<TFieldValues, TFieldArrayName>) => void;

// @public
export type UseFormClearErrors<TFieldValues extends FieldValues> = (name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[] | `root.${string}` | 'root') => void;

// @public
export type UseFormGetFieldState<TFieldValues extends FieldValues> = <TFieldName extends FieldPath<TFieldValues>>(name: TFieldName, formState?: FormState<TFieldValues>) => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    error?: FieldError;
};

// @public (undocumented)
export type UseFormGetValues<TFieldValues extends FieldValues> = {
    (): TFieldValues;
    <TFieldName extends FieldPath<TFieldValues>>(name: TFieldName): FieldPathValue<TFieldValues, TFieldName>;
    <TFieldNames extends FieldPath<TFieldValues>[]>(names: readonly [...TFieldNames]): [...FieldPathValues<TFieldValues, TFieldNames>];
};

// @public
export type UseFormHandleSubmit<TFieldValues extends FieldValues> = (onValid: SubmitHandler<TFieldValues>, onInvalid?: SubmitErrorHandler<TFieldValues>) => (e?: React.BaseSyntheticEvent) => Promise<void>;

// @public (undocumented)
export type UseFormProps<TFieldValues extends FieldValues = FieldValues, TContext = any> = Partial<{
    mode: Mode;
    reValidateMode: Exclude<Mode, 'onTouched' | 'all'>;
    defaultValues: DefaultValues<TFieldValues> | AsyncDefaultValues<TFieldValues>;
    values: TFieldValues;
    resetOptions: Parameters<UseFormReset<TFieldValues>>[1];
    resolver: Resolver<TFieldValues, TContext>;
    context: TContext;
    shouldFocusError: boolean;
    shouldUnregister: boolean;
    shouldUseNativeValidation: boolean;
    criteriaMode: CriteriaMode;
    delayError: number;
}>;

// @public
export type UseFormRegister<TFieldValues extends FieldValues> = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(name: TFieldName, options?: RegisterOptions<TFieldValues, TFieldName>) => UseFormRegisterReturn<TFieldName>;

// @public (undocumented)
export type UseFormRegisterReturn<TFieldName extends InternalFieldName = InternalFieldName> = {
    onChange: ChangeHandler;
    onBlur: ChangeHandler;
    ref: RefCallBack;
    name: TFieldName;
    min?: string | number;
    max?: string | number;
    maxLength?: number;
    minLength?: number;
    pattern?: string;
    required?: boolean;
    disabled?: boolean;
};

// Warning: (ae-forgotten-export) The symbol "ResetAction" needs to be exported by the entry point index.d.ts
//
// @public
export type UseFormReset<TFieldValues extends FieldValues> = (values?: DefaultValues<TFieldValues> | TFieldValues | ResetAction<TFieldValues>, keepStateOptions?: KeepStateOptions) => void;

// @public
export type UseFormResetField<TFieldValues extends FieldValues> = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(name: TFieldName, options?: Partial<{
    keepDirty: boolean;
    keepTouched: boolean;
    keepError: boolean;
    defaultValue: any;
}>) => void;

// @public (undocumented)
export type UseFormReturn<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
    watch: UseFormWatch<TFieldValues>;
    getValues: UseFormGetValues<TFieldValues>;
    getFieldState: UseFormGetFieldState<TFieldValues>;
    setError: UseFormSetError<TFieldValues>;
    clearErrors: UseFormClearErrors<TFieldValues>;
    setValue: UseFormSetValue<TFieldValues>;
    trigger: UseFormTrigger<TFieldValues>;
    formState: FormState<TFieldValues>;
    resetField: UseFormResetField<TFieldValues>;
    reset: UseFormReset<TFieldValues>;
    handleSubmit: UseFormHandleSubmit<TFieldValues>;
    unregister: UseFormUnregister<TFieldValues>;
    control: Control<TFieldValues, TContext>;
    register: UseFormRegister<TFieldValues>;
    setFocus: UseFormSetFocus<TFieldValues>;
};

// @public
export type UseFormSetError<TFieldValues extends FieldValues> = (name: FieldPath<TFieldValues> | `root.${string}` | 'root', error: ErrorOption, options?: {
    shouldFocus: boolean;
}) => void;

// @public
export type UseFormSetFocus<TFieldValues extends FieldValues> = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(name: TFieldName, options?: SetFocusOptions) => void;

// @public
export type UseFormSetValue<TFieldValues extends FieldValues> = <TFieldName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>(name: TFieldName, value: FieldPathValue<TFieldValues, TFieldName>, options?: SetValueConfig) => void;

// @public (undocumented)
export type UseFormStateProps<TFieldValues extends FieldValues> = Partial<{
    control?: Control<TFieldValues>;
    disabled?: boolean;
    name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[];
    exact?: boolean;
}>;

// @public (undocumented)
export type UseFormStateReturn<TFieldValues extends FieldValues> = FormState<TFieldValues>;

// @public
export type UseFormTrigger<TFieldValues extends FieldValues> = (name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[], options?: TriggerConfig) => Promise<boolean>;

// @public
export type UseFormUnregister<TFieldValues extends FieldValues> = (name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[], options?: Omit<KeepStateOptions, 'keepIsSubmitted' | 'keepSubmitCount' | 'keepValues' | 'keepDefaultValues' | 'keepErrors'> & {
    keepValue?: boolean;
    keepDefaultValue?: boolean;
    keepError?: boolean;
}) => void;

// @public (undocumented)
export type UseFormWatch<TFieldValues extends FieldValues> = {
    (): TFieldValues;
    <TFieldNames extends readonly FieldPath<TFieldValues>[]>(names: readonly [...TFieldNames], defaultValue?: DeepPartial<TFieldValues>): FieldPathValues<TFieldValues, TFieldNames>;
    <TFieldName extends FieldPath<TFieldValues>>(name: TFieldName, defaultValue?: FieldPathValue<TFieldValues, TFieldName>): FieldPathValue<TFieldValues, TFieldName>;
    (callback: WatchObserver<TFieldValues>, defaultValues?: DeepPartial<TFieldValues>): Subscription;
};

// @public (undocumented)
export type UseWatchProps<TFieldValues extends FieldValues = FieldValues> = {
    defaultValue?: unknown;
    disabled?: boolean;
    name?: FieldPath<TFieldValues> | FieldPath<TFieldValues>[] | readonly FieldPath<TFieldValues>[];
    control?: Control<TFieldValues>;
    exact?: boolean;
};

// @public (undocumented)
export type Validate<TFieldValue, TFormValues> = (value: TFieldValue, formValues: TFormValues) => ValidateResult | Promise<ValidateResult>;

// @public (undocumented)
export const validateField: <T extends FieldValues>(field: Field, formValues: T, validateAllFieldCriteria: boolean, shouldUseNativeValidation?: boolean, isFieldArray?: boolean) => Promise<InternalFieldErrors>;

// @public (undocumented)
export type ValidateResult = Message | boolean | undefined;

// @public (undocumented)
export const VALIDATION_MODE: ValidationMode;

// @public (undocumented)
export type ValidationMode = {
    onBlur: 'onBlur';
    onChange: 'onChange';
    onSubmit: 'onSubmit';
    onTouched: 'onTouched';
    all: 'all';
};

// @public (undocumented)
export type ValidationRule<TValidationValue extends ValidationValue = ValidationValue> = TValidationValue | ValidationValueMessage<TValidationValue>;

// @public (undocumented)
export type ValidationValue = boolean | number | string | RegExp;

// @public (undocumented)
export type ValidationValueMessage<TValidationValue extends ValidationValue = ValidationValue> = {
    value: TValidationValue;
    message: Message;
};

// Warning: (ae-forgotten-export) The symbol "ValidPathPrefixImpl" needs to be exported by the entry point index.d.ts
//
// @public
export type ValidPathPrefix<T, PT extends PathTuple> = ValidPathPrefixImpl<T, PT, [
]>;

// @public (undocumented)
export type WatchInternal<TFieldValues> = (fieldNames?: InternalFieldName | InternalFieldName[], defaultValue?: DeepPartial<TFieldValues>, isMounted?: boolean, isGlobal?: boolean) => FieldPathValue<FieldValues, InternalFieldName> | FieldPathValues<FieldValues, InternalFieldName[]>;

// @public (undocumented)
export type WatchObserver<TFieldValues extends FieldValues> = (value: DeepPartial<TFieldValues>, info: {
    name?: FieldPath<TFieldValues>;
    type?: EventType;
}) => void;

// Warnings were encountered during analysis:
//
// dist/index.d.ts:734:5 - (ae-forgotten-export) The symbol "AsyncDefaultValues" needs to be exported by the entry point index.d.ts
// dist/index.d.ts:1013:5 - (ae-forgotten-export) The symbol "Subscription" needs to be exported by the entry point index.d.ts

// (No @packageDocumentation comment for this package)

```