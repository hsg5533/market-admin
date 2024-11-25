const { kakao } = window;
module.exports = {
  centroid: function (points) {
    var i, j, len, p1, p2, f, area, x, y;
    area = x = y = 0;
    for (i = 0, len = points.length, j = len - 1; i < len; j = i++) {
      p1 = points[i];
      p2 = points[j];
      f = p1.y * p2.x - p2.y * p1.x;
      x += (p1.x + p2.x) * f;
      y += (p1.y + p2.y) * f;
      area += f * 3;
    }
    return new kakao.maps.LatLng(x / area, y / area);
  },
  getPolycode: function (Feature) {
    var geometry = Feature.geometry;
    if ("Polygon" === geometry.type) {
      var coordinate = geometry.coordinates[0];
      var polygonArr = { name: Feature.properties.adm_nm, path: [] };
      for (var c in coordinate) {
        polygonArr.path.push(
          new kakao.maps.LatLng(coordinate[c][1], coordinate[c][0])
        );
      }
      return polygonArr;
    } else if ("MultiPolygon" === geometry.type) {
      for (var c in geometry.coordinates) {
        var multiCoordinates = geometry.coordinates[c];
        var polygonArr = { name: Feature.properties.adm_nm, path: [] };
        for (var z in multiCoordinates[0]) {
          polygonArr.path.push(
            new kakao.maps.LatLng(
              multiCoordinates[0][z][1],
              multiCoordinates[0][z][0]
            )
          );
        }
        return polygonArr;
      }
    }
  },
  getPoints: function (Feature) {
    var points = [];
    var geometry = Feature.geometry;
    if ("Polygon" === geometry.type) {
      var coordinate = geometry.coordinates[0];
      for (var c in coordinate) {
        points.push({
          x: multiCoordinates[0][z][1],
          y: multiCoordinates[0][z][0],
        });
      }
      return this.centroid(points);
    } else if ("MultiPolygon" === geometry.type) {
      for (var c in geometry.coordinates) {
        var multiCoordinates = geometry.coordinates[c];
        for (var z in multiCoordinates[0]) {
          points.push({
            x: multiCoordinates[0][z][1],
            y: multiCoordinates[0][z][0],
          });
        }
        return this.centroid(points);
      }
    }
  },
  getAddress: function (address) {
    let detailAddr = !!address[0].road_address
      ? "<div>도로명주소 : " + address[0].road_address.address_name + "</div>"
      : "";
    detailAddr +=
      "<div>지번 주소 : " + address[0].address.address_name + "</div>";
    return detailAddr;
  },
  getDistance: function (distance) {
    const walkkTime = (distance / 67) | 0;
    const bycicleTime = (distance / 227) | 0;
    let walkHour = "";
    let walkMin = "";
    let bycicleHour = "";
    let bycicleMin = "";
    if (walkkTime > 60) {
      walkHour =
        '<span class="number">' + Math.floor(walkkTime / 60) + "</span>시간 ";
    } else {
      walkMin = '<span class="number">' + (walkkTime % 60) + "</span>분";
    }
    if (bycicleTime > 60) {
      bycicleHour =
        '<span class="number">' + Math.floor(bycicleTime / 60) + "</span>시간 ";
    } else {
      bycicleMin = "<span class='number'>" + (bycicleTime % 60) + "</span>분";
    }
    let content = "<ul class='dotOverlay distanceInfo'>";
    content += "<li>";
    content +=
      "<span class='label'>총거리</span><span class='number'>" +
      distance +
      "</span>m";
    content += "</li>";
    content += "<li>";
    content += "<span class='label'>도보</span>" + walkHour + walkMin;
    content += "</li>";
    content += "<li>";
    content += "<span class='label'>자전거</span>" + bycicleHour + bycicleMin;
    content += "</li>";
    content += "</ul>";
    return content;
  },
};
