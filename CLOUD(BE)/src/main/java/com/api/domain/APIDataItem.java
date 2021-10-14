package com.api.domain;

public class APIDataItem {
    String dinr_cal;
    String lunc;
    String sum_cal;
    String adspcfd;
    String adspcfd_cal;
    String dates;
    String lunc_cal;
    String brst;
    String dinr;
    String brst_cal;

    public String getDinr_cal() {
        return this.dinr_cal;
    }

    public void setDinr_cal(String dinr_cal) {
        this.dinr_cal = dinr_cal;
    }

    public String getLunc() {
        return this.lunc;
    }

    public void setLunc(String lunc) {
        this.lunc = lunc;
    }

    public String getSum_cal() {
        return this.sum_cal;
    }

    public void setSum_cal(String sum_cal) {
        this.sum_cal = sum_cal;
    }

    public String getAdspcfd() {
        return this.adspcfd;
    }

    public void setAdspcfd(String adspcfd) {
        this.adspcfd = adspcfd;
    }

    public String getAdspcfd_cal() {
        return this.adspcfd_cal;
    }

    public void setAdspcfd_cal(String adspcfd_cal) {
        this.adspcfd_cal = adspcfd_cal;
    }

    public String getDates() {
        return this.dates;
    }

    public void setDates(String dates) {
        this.dates = dates;
    }

    public String getLunc_cal() {
        return this.lunc_cal;
    }

    public void setLunc_cal(String lunc_cal) {
        this.lunc_cal = lunc_cal;
    }

    public String getBrst() {
        return this.brst;
    }

    public void setBrst(String brst) {
        this.brst = brst;
    }

    public String getDinr() {
        return this.dinr;
    }

    public void setDinr(String dinr) {
        this.dinr = dinr;
    }

    public String getBrst_cal() {
        return this.brst_cal;
    }

    public void setBrst_cal(String brst_cal) {
        this.brst_cal = brst_cal;
    }


    @Override
    public String toString() {
        return "{" +
            " dinr_cal='" + getDinr_cal() + "'" +
            ", lunc='" + getLunc() + "'" +
            ", sum_cal='" + getSum_cal() + "'" +
            ", adspcfd='" + getAdspcfd() + "'" +
            ", adspcfd_cal='" + getAdspcfd_cal() + "'" +
            ", dates='" + getDates() + "'" +
            ", lunc_cal='" + getLunc_cal() + "'" +
            ", brst='" + getBrst() + "'" +
            ", dinr='" + getDinr() + "'" +
            ", brst_cal='" + getBrst_cal() + "'" +
            "}";
    }

}
