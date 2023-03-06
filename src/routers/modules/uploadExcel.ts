import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/routers/constant";

// 上传 Excel 模块
const formRouter: Array<RouteRecordRaw> = [
	{
		path: "/excel",
		component: Layout,
		redirect: "/excel/upload",
		meta: {
			title: "uploadExcel"
		},
		children: [
			{
				path: "/excel/upload",
				name: "excelUpload",
				component: () => import("@/views/excel/upload/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: false,
					title: "上传Excel",
					key: "excelUpload"
				}
			}
		]
	}
];

export default formRouter;
