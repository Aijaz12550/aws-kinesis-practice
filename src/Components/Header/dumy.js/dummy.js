type AijazPractice123 {
	id: ID!
	title: String
}

type AijazPractice123Connection {
	items: [AijazPractice123]
	nextToken: String
}

input CreateAijazPractice123Input {
	title: String
}

input DeleteAijazPractice123Input {
	id: ID!
}

type Mutation {
	createAijazPractice123(input: CreateAijazPractice123Input!): AijazPractice123
	updateAijazPractice123(input: UpdateAijazPractice123Input!): AijazPractice123
	deleteAijazPractice123(input: DeleteAijazPractice123Input!): AijazPractice123
}

type Query {
	getAijazPractice123(id: ID!): AijazPractice123
	listAijazPractice123S(filter: TableAijazPractice123FilterInput, limit: Int, nextToken: String): AijazPractice123Connection
}

type Subscription {
	onCreateAijazPractice123(id: ID, title: String): AijazPractice123
		@aws_subscribe(mutations: ["createAijazPractice123"])
	onUpdateAijazPractice123(id: ID, title: String): AijazPractice123
		@aws_subscribe(mutations: ["updateAijazPractice123"])
	onDeleteAijazPractice123(id: ID, title: String): AijazPractice123
		@aws_subscribe(mutations: ["deleteAijazPractice123"])
}

input TableAijazPractice123FilterInput {
	id: TableIDFilterInput
	title: TableStringFilterInput
}

input TableBooleanFilterInput {
	ne: Boolean
	eq: Boolean
}

input TableFloatFilterInput {
	ne: Float
	eq: Float
	le: Float
	lt: Float
	ge: Float
	gt: Float
	contains: Float
	notContains: Float
	between: [Float]
}

input TableIDFilterInput {
	ne: ID
	eq: ID
	le: ID
	lt: ID
	ge: ID
	gt: ID
	contains: ID
	notContains: ID
	between: [ID]
	beginsWith: ID
}

input TableIntFilterInput {
	ne: Int
	eq: Int
	le: Int
	lt: Int
	ge: Int
	gt: Int
	contains: Int
	notContains: Int
	between: [Int]
}

input TableStringFilterInput {
	ne: String
	eq: String
	le: String
	lt: String
	ge: String
	gt: String
	contains: String
	notContains: String
	between: [String]
	beginsWith: String
}

input UpdateAijazPractice123Input {
	id: ID!
	title: String
}