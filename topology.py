import time
import argparse

from comnetsemu.net import Containernet
from mininet.log import info, setLogLevel
from mininet.node import Controller
from mininet.link import TCLink

CPU_SETS = "0"

if __name__ == "__main__":
    setLogLevel("info")

    net = Containernet(controller=Controller, link=TCLink)

    info("Add controller c0\n")
    net.addController("c0")

    info("Add switch s1\n")
    switch = net.addSwitch("s1")

    # broker
    
    info("Add host brokermqtt\n")
    brokermqtt = net.addDockerHost(
        "brokermqtt",
        dimage="brokermqtt",
        ip="10.0.0.1",
        docker_args={},
    )

    info("Add link\n")
    net.addLink(switch, brokermqtt, bw=10, delay="10ms")

    # valvole

    info("Add host valvolacucina\n")
    valvolacucina = net.addDockerHost(
        "valvolacucina",
        dimage="valvola",
        ip="10.0.0.31",
        docker_args={"environment": ["NAME=cucina"]},
    )

    info("Add link\n")
    net.addLink(switch, valvolacucina, bw=10, delay="10ms")

    info("Add host valvolacamera\n")
    valvolacamera = net.addDockerHost(
        "valvolacamera",
        dimage="valvola",
        ip="10.0.0.32",
        docker_args={"environment": ["NAME=camera"]},
    )

    info("Add link\n")
    net.addLink(switch, valvolacamera, bw=10, delay="10ms")

    info("Add host valvolabagno\n")
    valvolabagno = net.addDockerHost(
        "valvolabagno",
        dimage="valvola",
        ip="10.0.0.33",
        docker_args={"environment": ["NAME=bagno"]},
    )

    info("Add link\n")
    net.addLink(switch, valvolabagno, bw=10, delay="10ms")

    # umidificatori

    info("Add host umidificatorecucina\n")
    umidcucina = net.addDockerHost(
        "umidificatorecucina",
        dimage="umidificatore",
        ip="10.0.0.34",
        docker_args={"environment": ["NAME=cucina"]},
    )

    info("Add link\n")
    net.addLink(switch, umidcucina, bw=10, delay="10ms")

    info("Add host umidificatorecamera\n")
    umidcamera = net.addDockerHost(
        "umidificatorecamera",
        dimage="umidificatore",
        ip="10.0.0.35",
        docker_args={"environment": ["NAME=camera"]},
    )

    info("Add link\n")
    net.addLink(switch, umidcamera, bw=10, delay="10ms")

    info("Add host umidificatorebagno\n")
    umidbagno = net.addDockerHost(
        "umidificatorebagno",
        dimage="umidificatore",
        ip="10.0.0.36",
        docker_args={"environment": ["NAME=bagno"]},
    )

    info("Add link\n")
    net.addLink(switch, umidbagno, bw=10, delay="10ms")

    # app

    info("Add host app\n")
    app = net.addDockerHost(
        "app",
        dimage="app",
        ip="10.0.0.2",
        docker_args={},
    )

    info("Add link\n")
    net.addLink(switch, app, bw=10, delay="10ms")
    
    # start

    info("Start\n")
    net.start()

    time.sleep(60)

    info("Forza Napoli\n")
    net.stop()
