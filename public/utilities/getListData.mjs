export default (appData) => {
  const sentQuality = appData.map(({ sentQuality }) => sentQuality);
  const recvQuality = appData.map(({ recvQuality }) => recvQuality);
  const senderLongitude = appData.map(({ senderLongitude }) => senderLongitude);
  const senderLatitude = appData.map(({ senderLatitude }) => senderLatitude);
  const recvLongitude = appData.map(({ recvLongitude }) => recvLongitude);
  const recvLatitude = appData.map(({ recvLatitude }) => recvLatitude);
  const recvAs = appData.map(({ recvAs }) => recvAs);
  const meanSendingRateKbps = appData.map(({ meanSendingRateKbps }) => meanSendingRateKbps);
  const meanSentFrameHeight = appData.map(({ meanSentFrameHeight }) => meanSentFrameHeight);
  const meanSentFrameWidth = appData.map(({ meanSentFrameWidth }) => meanSentFrameWidth);
  const medianSentFrameHeight = appData.map(({ medianSentFrameHeight }) => medianSentFrameHeight);
  const medianSentFrameWidth = appData.map(({ medianSentFrameWidth }) => medianSentFrameWidth);

  return {
    sentQuality,
    recvQuality,
    senderLongitude,
    senderLatitude,
    recvLongitude,
    recvLatitude,
    recvAs,
    meanSendingRateKbps,
    meanSentFrameHeight,
    meanSentFrameWidth,
    medianSentFrameHeight,
    medianSentFrameWidth,
  }
};
