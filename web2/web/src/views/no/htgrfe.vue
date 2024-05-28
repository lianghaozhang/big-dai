<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				pageSize: [10, 20, 30, 40, 50, 100],
				/* tableData: [],
				id: '',
				userName: '',
				realName: '',
				status: '',
				createDate: '',
				updateDate: '', */
				tableData: [{
						"id": "2f2a4288-2d37-44e7-b4a2-12a1b465c5be",
						"username": "aaaaaa",
						"realName": "vdvvf",
						"status": 1,
						"createDate": "2023-04-28 10:35:38",
						"updateDate": "2023-04-28 10:35:38"
					},
					{
						"id": "ca061127-7780-44f8-af31-9d6ff17e29bf",
						"username": "aaassssw",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-27 09:10:58",
						"updateDate": "2023-04-27 09:10:58"
					},
					{
						"id": "ead0811c-6d1b-45d5-99b6-a26743403c56",
						"username": "aaassss",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-27 09:08:54",
						"updateDate": "2023-04-27 09:08:54"
					},
					{
						"id": "a32d4ad3-a313-42d8-bf7c-66522723a634",
						"username": "aaasssas",
						"realName": "陆俊雅",
						"status": 1,
						"createDate": "2023-04-25 04:21:08",
						"updateDate": "2023-04-25 04:21:08"
					},
					{
						"id": "933342ea-b99d-49af-b7bd-1570536d007a",
						"username": "6666",
						"realName": "李嘉诚",
						"status": 1,
						"createDate": "2023-04-24 04:15:21",
						"updateDate": "2023-04-24 04:15:21"
					},
					{
						"id": "bc8b4ea2-2314-4401-bf4f-c3fb98852877",
						"username": "229050825",
						"realName": "田浩成",
						"status": 1,
						"createDate": "2023-04-23 10:36:47",
						"updateDate": "2023-04-23 10:36:47"
					},
					{
						"id": "9b4c5049-d619-4e0f-ab69-8ca1a90f6a57",
						"username": "wxy9496099",
						"realName": "汪鑫宇",
						"status": 1,
						"createDate": "2023-04-23 09:39:21",
						"updateDate": "2023-04-23 09:39:21"
					},
					{
						"id": "5850122d-dbd0-4b13-99ce-f82d69a557d0",
						"username": "229050400",
						"realName": "cyy",
						"status": 1,
						"createDate": "2023-04-23 08:48:58",
						"updateDate": "2023-04-23 08:48:58"
					},
					{
						"id": "1ec27309-4cf8-4416-8707-b33dea60dfa1",
						"username": "bcdefg",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-23 08:45:15",
						"updateDate": "2023-04-23 08:45:15"
					},
					{
						"id": "404e22d6-90bc-4449-a6a9-aeafebaa70c9",
						"username": "assassmnh",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-23 08:45:07",
						"updateDate": "2023-04-23 08:45:07"
					},
					{
						"id": "622f0d74-2073-406d-aa17-cd2583962375",
						"username": "Awe",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-23 08:41:11",
						"updateDate": "2023-04-23 08:41:11"
					},
					{
						"id": "ba446608-9336-48a6-a777-981ff26faee1",
						"username": "mmmnnn",
						"realName": "用户2",
						"status": 1,
						"createDate": "2023-04-23 08:40:12",
						"updateDate": "2023-04-23 08:40:12"
					},
					{
						"id": "43c3bb10-229c-48de-bb84-28c1dfa3b5c4",
						"username": "abc",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-23 04:52:56",
						"updateDate": "2023-04-23 04:52:56"
					},
					{
						"id": "9bc5e331-84df-41b1-9897-0ed3e6158d03",
						"username": "user1111111",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-19 06:00:20",
						"updateDate": "2023-04-19 06:00:20"
					},
					{
						"id": "8bccb670-7262-4359-a389-92561b174e04",
						"username": "aaasss",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-19 04:48:44",
						"updateDate": "2023-04-19 04:48:44"
					},
					{
						"id": "4f2b37d5-03ba-4549-b46e-45d557c915ac",
						"username": "aasssa",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-19 04:43:53",
						"updateDate": "2023-04-19 04:43:53"
					},
					{
						"id": "02d9904c-9420-4721-9a8a-167d1b75e0be",
						"username": "aaa",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-19 04:40:37",
						"updateDate": "2023-04-19 04:40:37"
					},
					{
						"id": "9b7b87a2-a7ee-4645-b263-1f4a3f86fdaa",
						"username": "asdasd",
						"realName": "用户",
						"status": 1,
						"createDate": "2023-04-19 04:39:31",
						"updateDate": "2023-04-19 04:39:31"
					},
					{
						"id": "86",
						"username": "瑞",
						"realName": "张瑞亮",
						"status": 1,
						"createDate": "2023-04-12 11:34:33",
						"updateDate": "2023-04-12 11:34:33"
					},
					{
						"id": "85",
						"username": "雷伊",
						"realName": "leiyi",
						"status": 1,
						"createDate": "2023-04-12 10:35:48",
						"updateDate": "2023-04-12 10:35:48"
					},
					{
						"id": "84",
						"username": "zhangsan",
						"realName": "张三",
						"status": 1,
						"createDate": "2023-04-12 10:34:29",
						"updateDate": "2023-04-12 10:34:29"
					},
					{
						"id": "82",
						"username": "yugle3",
						"realName": "yugle333",
						"status": 1,
						"createDate": "2023-04-12 04:43:01",
						"updateDate": "2023-04-12 04:43:01"
					},
					{
						"id": "80",
						"username": "yugle2test",
						"realName": "yuglee",
						"status": 1,
						"createDate": "2023-04-11 16:57:28",
						"updateDate": "2023-04-11 16:57:28"
					},
					{
						"id": "79",
						"username": "yugle",
						"realName": "YUGLE",
						"status": 1,
						"createDate": "2023-04-11 14:42:36",
						"updateDate": "2023-04-11 14:42:36"
					},
					{
						"id": "78",
						"username": "229050823",
						"realName": "邵信浩",
						"status": 1,
						"createDate": "2023-04-11 12:19:53",
						"updateDate": "2023-04-11 12:19:53"
					},
					{
						"id": "77",
						"username": "229220235",
						"realName": "吴飞遐",
						"status": 1,
						"createDate": "2023-04-11 11:42:51",
						"updateDate": "2023-04-11 11:42:51"
					},
					{
						"id": "76",
						"username": "229050740",
						"realName": "周启航",
						"status": 1,
						"createDate": "2023-04-11 11:06:23",
						"updateDate": "2023-04-11 11:06:23"
					},
					{
						"id": "75",
						"username": "刘航",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-11 11:06:07",
						"updateDate": "2023-04-11 11:06:07"
					},
					{
						"id": "74",
						"username": "229050614",
						"realName": "李杭飞",
						"status": 1,
						"createDate": "2023-04-11 11:03:10",
						"updateDate": "2023-04-11 11:03:10"
					},
					{
						"id": "73",
						"username": "user666",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-11 11:02:21",
						"updateDate": "2023-04-11 11:02:21"
					},
					{
						"id": "72",
						"username": "229050828",
						"realName": "王铮",
						"status": 1,
						"createDate": "2023-04-11 11:01:14",
						"updateDate": "2023-04-11 11:01:14"
					},
					{
						"id": "71",
						"username": "229050623",
						"realName": "whm",
						"status": 1,
						"createDate": "2023-04-11 11:00:58",
						"updateDate": "2023-04-11 11:00:58"
					},
					{
						"id": "70",
						"username": "229050831",
						"realName": "谢家濠",
						"status": 1,
						"createDate": "2023-04-11 11:00:51",
						"updateDate": "2023-04-11 11:00:51"
					},
					{
						"id": "69",
						"username": "229200417",
						"realName": "马萱迪",
						"status": 1,
						"createDate": "2023-04-11 10:59:20",
						"updateDate": "2023-04-11 10:59:20"
					},
					{
						"id": "68",
						"username": "229050620",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-11 10:58:39",
						"updateDate": "2023-04-11 10:58:39"
					},
					{
						"id": "67",
						"username": "229050436",
						"realName": "叶愉欢",
						"status": 1,
						"createDate": "2023-04-11 10:57:47",
						"updateDate": "2023-04-11 10:57:47"
					},
					{
						"id": "66",
						"username": "229050827",
						"realName": "王廷刚",
						"status": 1,
						"createDate": "2023-04-11 10:56:09",
						"updateDate": "2023-04-11 10:56:09"
					},
					{
						"id": "65",
						"username": "229050611",
						"realName": "葛云斐",
						"status": 1,
						"createDate": "2023-04-11 10:55:13",
						"updateDate": "2023-04-11 10:55:13"
					},
					{
						"id": "64",
						"username": "229050429",
						"realName": "王岚杰",
						"status": 1,
						"createDate": "2023-04-11 10:52:57",
						"updateDate": "2023-04-11 10:52:57"
					},
					{
						"id": "63",
						"username": "229012345",
						"realName": "方绪健",
						"status": 1,
						"createDate": "2023-04-11 10:52:40",
						"updateDate": "2023-04-11 10:52:40"
					},
					{
						"id": "62",
						"username": "229050537",
						"realName": "章文杰",
						"status": 1,
						"createDate": "2023-04-11 09:51:40",
						"updateDate": "2023-04-11 09:51:40"
					},
					{
						"id": "61",
						"username": "CT",
						"realName": "陈泰",
						"status": 1,
						"createDate": "2023-04-11 08:48:37",
						"updateDate": "2023-04-11 08:48:37"
					},
					{
						"id": "60",
						"username": "不懂啊",
						"realName": "蔡红楷",
						"status": 1,
						"createDate": "2023-04-11 08:46:30",
						"updateDate": "2023-04-11 08:46:30"
					},
					{
						"id": "59",
						"username": "229480530",
						"realName": "熊志朋",
						"status": 1,
						"createDate": "2023-04-11 08:39:18",
						"updateDate": "2023-04-11 08:39:18"
					},
					{
						"id": "58",
						"username": "229050603",
						"realName": "鲁豫茜",
						"status": 1,
						"createDate": "2023-04-11 08:27:35",
						"updateDate": "2023-04-11 08:27:35"
					},
					{
						"id": "57",
						"username": "229050317LHJ",
						"realName": null,
						"status": 1,
						"createDate": "2023-04-11 08:25:09",
						"updateDate": "2023-04-11 08:25:09"
					},
					{
						"id": "56",
						"username": "229050319LC",
						"realName": "刘畅",
						"status": 1,
						"createDate": "2023-04-11 08:22:24",
						"updateDate": "2023-04-11 08:22:24"
					},
					{
						"id": "54",
						"username": "汤",
						"realName": "汤煜",
						"status": 1,
						"createDate": "2023-04-11 08:20:39",
						"updateDate": "2023-04-11 08:20:39"
					},
					{
						"id": "53",
						"username": "229050615",
						"realName": "梁家豪",
						"status": 1,
						"createDate": "2023-04-11 08:19:41",
						"updateDate": "2023-04-11 08:19:41"
					},
					{
						"id": "52",
						"username": "229050535",
						"realName": "张瑞桀",
						"status": 1,
						"createDate": "2023-04-11 08:19:14",
						"updateDate": "2023-04-11 08:19:14"
					},
					{
						"id": "51",
						"username": "229050417",
						"realName": "李",
						"status": 1,
						"createDate": "2023-04-11 08:18:04",
						"updateDate": "2023-04-11 08:18:04"
					},
					{
						"id": "50",
						"username": "229050305",
						"realName": "张涵露",
						"status": 1,
						"createDate": "2023-04-11 08:18:03",
						"updateDate": "2023-04-11 08:18:03"
					},
					{
						"id": "49",
						"username": "229050307",
						"realName": "张梦哲",
						"status": 1,
						"createDate": "2023-04-11 08:17:39",
						"updateDate": "2023-04-11 08:17:39"
					},
					{
						"id": "48",
						"username": "229050609",
						"realName": "傅晨",
						"status": 1,
						"createDate": "2023-04-11 08:16:14",
						"updateDate": "2023-04-11 08:16:14"
					},
					{
						"id": "47",
						"username": "吕",
						"realName": "吕浩铭",
						"status": 1,
						"createDate": "2023-04-11 08:15:57",
						"updateDate": "2023-04-11 08:15:57"
					},
					{
						"id": "46",
						"username": "229050715",
						"realName": "胡宇韬",
						"status": 1,
						"createDate": "2023-04-11 08:14:51",
						"updateDate": "2023-04-11 08:14:51"
					},
					{
						"id": "45",
						"username": "229050409",
						"realName": "曹洋赫",
						"status": 1,
						"createDate": "2023-04-11 08:14:30",
						"updateDate": "2023-04-11 08:14:30"
					},
					{
						"id": "43",
						"username": "12345",
						"realName": "世界首富李嘉诚",
						"status": 1,
						"createDate": "2023-04-11 08:12:48",
						"updateDate": "2023-04-11 08:12:48"
					},
					{
						"id": "42",
						"username": "229050714胡彬宇",
						"realName": "229050714胡彬宇",
						"status": 1,
						"createDate": "2023-04-11 08:11:56",
						"updateDate": "2023-04-11 08:11:56"
					},
					{
						"id": "41",
						"username": "229050522",
						"realName": "邱浩",
						"status": 1,
						"createDate": "2023-04-11 08:11:35",
						"updateDate": "2023-04-11 08:11:35"
					},
					{
						"id": "40",
						"username": "戴峥杰229050709",
						"realName": "戴峥杰",
						"status": 1,
						"createDate": "2023-04-11 08:11:31",
						"updateDate": "2023-04-11 08:11:31"
					},
					{
						"id": "39",
						"username": "ices",
						"realName": "吴永杰",
						"status": 1,
						"createDate": "2023-04-11 08:11:28",
						"updateDate": "2023-04-11 08:11:28"
					},
					{
						"id": "38",
						"username": "kanostar",
						"realName": "廖佳文",
						"status": 1,
						"createDate": "2023-04-11 08:11:06",
						"updateDate": "2023-04-11 08:11:06"
					},
					{
						"id": "37",
						"username": "229050325",
						"realName": "谭浩宇",
						"status": 1,
						"createDate": "2023-04-11 08:11:02",
						"updateDate": "2023-04-11 08:11:02"
					},
					{
						"id": "36",
						"username": "12121212121255",
						"realName": "111",
						"status": 1,
						"createDate": "2023-04-11 08:10:56",
						"updateDate": "2023-04-11 08:10:56"
					},
					{
						"id": "35",
						"username": "229050321",
						"realName": "刘智豪",
						"status": 1,
						"createDate": "2023-04-11 08:10:41",
						"updateDate": "2023-04-11 08:10:41"
					},
					{
						"id": "34",
						"username": "229050410",
						"realName": "陈毅涵",
						"status": 1,
						"createDate": "2023-04-11 08:10:24",
						"updateDate": "2023-04-11 08:10:24"
					},
					{
						"id": "33",
						"username": "戴峥杰",
						"realName": "戴峥杰",
						"status": 1,
						"createDate": "2023-04-11 08:10:04",
						"updateDate": "2023-04-11 08:10:04"
					},
					{
						"id": "32",
						"username": "icesss",
						"realName": "吴永杰",
						"status": 1,
						"createDate": "2023-04-11 08:09:33",
						"updateDate": "2023-04-11 08:09:33"
					},
					{
						"id": "31",
						"username": "229050622",
						"realName": "汪鑫宇",
						"status": 1,
						"createDate": "2023-04-11 08:09:21",
						"updateDate": "2023-04-11 08:09:21"
					},
					{
						"id": "30",
						"username": "229200616.",
						"realName": "胡浩",
						"status": 1,
						"createDate": "2023-04-11 08:08:18",
						"updateDate": "2023-04-11 08:08:18"
					},
					{
						"id": "29",
						"username": "汪鑫宇",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-11 08:08:14",
						"updateDate": "2023-04-11 08:08:14"
					},
					{
						"id": "28",
						"username": "229480308",
						"realName": "官海涛",
						"status": 1,
						"createDate": "2023-04-11 08:08:08",
						"updateDate": "2023-04-11 08:08:08"
					},
					{
						"id": "27",
						"username": "真的很强",
						"realName": "官海涛",
						"status": 1,
						"createDate": "2023-04-11 08:07:10",
						"updateDate": "2023-04-11 08:07:10"
					},
					{
						"id": "26",
						"username": "229050534",
						"realName": "杨浩弘",
						"status": 1,
						"createDate": "2023-04-11 08:06:34",
						"updateDate": "2023-04-11 08:06:34"
					},
					{
						"id": "25",
						"username": "229050314",
						"realName": "缑鹏浩",
						"status": 1,
						"createDate": "2023-04-11 08:06:33",
						"updateDate": "2023-04-11 08:06:33"
					},
					{
						"id": "24",
						"username": "周金雷",
						"realName": "周金雷",
						"status": 1,
						"createDate": "2023-04-11 08:06:25",
						"updateDate": "2023-04-11 08:06:25"
					},
					{
						"id": "23",
						"username": "229050405",
						"realName": "我好饿",
						"status": 1,
						"createDate": "2023-04-11 08:06:20",
						"updateDate": "2023-04-11 08:06:20"
					},
					{
						"id": "22",
						"username": "229200616",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-11 08:06:04",
						"updateDate": "2023-04-11 08:06:04"
					},
					{
						"id": "21",
						"username": "229050320",
						"realName": "刘杨泽",
						"status": 1,
						"createDate": "2023-04-11 08:05:28",
						"updateDate": "2023-04-11 08:05:28"
					},
					{
						"id": "20",
						"username": "229050312",
						"realName": "房相",
						"status": 1,
						"createDate": "2023-04-11 08:04:50",
						"updateDate": "2023-04-11 08:04:50"
					},
					{
						"id": "19",
						"username": "229050316jrt",
						"realName": "江睿天",
						"status": 1,
						"createDate": "2023-04-11 08:04:11",
						"updateDate": "2023-04-11 08:04:11"
					},
					{
						"id": "18",
						"username": "209050410顾骁俊",
						"realName": "209050410顾骁俊",
						"status": 1,
						"createDate": "2023-04-11 08:04:09",
						"updateDate": "2023-04-11 08:04:09"
					},
					{
						"id": "17",
						"username": "user",
						"realName": "马鑫雨",
						"status": 1,
						"createDate": "2023-04-11 08:04:07",
						"updateDate": "2023-04-11 08:04:07"
					},
					{
						"id": "16",
						"username": "229050717黄靖雄",
						"realName": "229050717黄靖雄",
						"status": 1,
						"createDate": "2023-04-11 08:03:56",
						"updateDate": "2023-04-11 08:03:56"
					},
					{
						"id": "15",
						"username": "229050718",
						"realName": "229050718",
						"status": 1,
						"createDate": "2023-04-11 08:03:51",
						"updateDate": "2023-04-11 08:03:51"
					},
					{
						"id": "14",
						"username": "朱佳伟",
						"realName": "朱佳伟",
						"status": 1,
						"createDate": "2023-04-11 08:03:16",
						"updateDate": "2023-04-11 08:03:16"
					},
					{
						"id": "13",
						"username": "wsk",
						"realName": "邬树坤",
						"status": 1,
						"createDate": "2023-04-11 08:01:37",
						"updateDate": "2023-04-11 08:01:37"
					},
					{
						"id": "12",
						"username": "229050413",
						"realName": "何路苁",
						"status": 1,
						"createDate": "2023-04-11 08:01:06",
						"updateDate": "2023-04-11 08:01:06"
					},
					{
						"id": "11",
						"username": "229050324任嘉炫",
						"realName": "229050324任嘉炫",
						"status": 1,
						"createDate": "2023-04-11 08:00:37",
						"updateDate": "2023-04-11 08:00:37"
					},
					{
						"id": "10",
						"username": "user2",
						"realName": "用户2",
						"status": 1,
						"createDate": "2023-04-11 07:58:43",
						"updateDate": "2023-04-11 07:58:43"
					},
					{
						"id": "9",
						"username": "user1234",
						"realName": "用户1",
						"status": 1,
						"createDate": "2023-04-11 07:56:05",
						"updateDate": "2023-04-11 07:56:05"
					},
					{
						"id": "8",
						"username": "lyx",
						"realName": "方方最可爱",
						"status": 1,
						"createDate": "2023-04-11 03:23:10",
						"updateDate": "2023-04-11 03:23:10"
					},
					{
						"id": "7",
						"username": "我是你大爷",
						"realName": "达达利亚",
						"status": 1,
						"createDate": "2023-04-11 03:00:39",
						"updateDate": "2023-04-11 03:00:39"
					},
					{
						"id": "6",
						"username": "xingcang",
						"realName": "用户123456",
						"status": 1,
						"createDate": "2023-04-11 02:59:54",
						"updateDate": "2023-04-11 02:59:54"
					},
					{
						"id": "5",
						"username": "229050502",
						"realName": "信工大聪明",
						"status": 1,
						"createDate": "2023-04-11 02:57:43",
						"updateDate": "2023-04-11 02:57:43"
					},
					{
						"id": "4",
						"username": "123456",
						"realName": "fangxj",
						"status": 1,
						"createDate": "2023-04-11 02:51:46",
						"updateDate": "2023-04-11 02:51:46"
					},
					{
						"id": "2",
						"username": "user11",
						"realName": "用户11",
						"status": 0,
						"createDate": "2023-02-14 02:57:44",
						"updateDate": "2023-02-14 02:57:44"
					},
					{
						"id": "1",
						"username": "admin",
						"realName": "超管",
						"status": 1,
						"createDate": "2023-02-14 01:47:53",
						"updateDate": "2023-02-14 01:47:53"
					}
				]
			}
		},
		methods: {
			showUserInfo() {
				axios.post("/list", {}, {
						headers: {
							token: localStorage.getItem('token')
						},
					})
					.then(res => {
						if (res.data.msg === 'success') {
							this.$message({
								message: '数据更新成功',
								group: true,
								type: 'success'
							})
						} else if (res.data.msg === 'token不能为空, 请先登录获取token') {
							this.$message({
								message: '数据更新失败',
								group: true,
								type: 'error'
							})
						}
						console.log(res)
						this.totalPage = res.data.data.totalPage;
						this.currPage = currPage;
						this.tableData = res.data.data.list;
					})
			},
			changePage(p) {
				this.currPage = p;
				this.showUserInfo();
			}
		}
	}
</script>