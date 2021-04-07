import request from '@/utils/request.js'

export function getEngineerList(){
	return request({
		url: 'engineer/selectListByType',
		method: 'GET',
		params: {
			type: '车辆'
		}
	})
}

export function deleteVehicle(id){
	return request({
		url: 'engineer/deleteVehicle',
		method: 'GET',
		params: {
			id: id
		}
	})
}